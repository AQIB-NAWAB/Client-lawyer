const ErrorHander = require("../utilis/errorHander");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utilis/jwtToken");
const sendEmail = require('../utilis/sendEmail');
const crypto = require("crypto");
const cloudinary = require("cloudinary");



// register a user

exports.registerUser = catchAsyncError(async (req, res, next) => {
  // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //   folder: "avatars",
  //   width: 150,
  //   crop: "scale",
  // });

  // const { name, email, password } = req.body;

  const user = await User.create(req.body);

  sendToken(user, 201, res);
});

// login user

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has entered email and pass both
  if (!email || !password) {
    return next(new ErrorHander("please enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email. or password", 401));
  }

  const isPasswordMatched =await user.comparePassword(password);

  // console.log(isPasswordMatched);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password.", 401));
  }

  sendToken(user, 200, res);
});

// Logout User
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "logged out",
  });
});

// Forgot password

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not Found", 404));
  }

  // Get ResetPassword Token From UserMOdel
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;
  // const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

  const message = `Your Password reset token is  :- \n\n ${resetPasswordUrl} \n\n If you have not requestedthis email then please ignore it`;

  try {
      await sendEmail({
        email: user.email,
        subject:`Attorney Ease  password recovery`,
        message,
      });
      res.status(200).json({
          success: true,
          message: `Email sent to ${user.email} succesfully`,
      })
      
  } catch (error) {
      user.getResetPasswordToken = undefined;
      user.resetPasswordUrl = undefined;

      await user.save({ validateBeforeSave: false });

      return next(new ErrorHander(error.message, 500))
  }
});


// Reset password

exports.resetPassword = catchAsyncError(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    const user = await  User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if(!user){
      return next(new ErrorHander("Reset password token is invalid or has been expired", 400));
    }

    if(req.body.password !== req.body.confirmPassword) {
      return next(new ErrorHander("Passowrd does not match confirm passowrd", 400));
    }

    user.password = req.body.password;
    user.getResetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);

});



// Get user detail

exports.getUserDetails = catchAsyncError(async (req,res,next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});


// UPDATE user detail

exports.updatePassowrd = catchAsyncError(async (req,res,next) => {

  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Old password is incorrect", 400));
  }

  
  if(req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("Passowrd does not match confirm passowrd", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user,200,res);

  
});








// GET all users (--ADMIN)
exports.getAllUser = catchAsyncError (async (req,res,next)=>{
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
})



// GET single users 
exports.getSingleUser = catchAsyncError (async (req,res,next)=>{
  const user = await User.findById(req.params.id);

  if(!user){
    return next(
      new ErrorHander (`User does not exist with id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });

})


// UPDATE user Role (--ADMIN)




// UPDATE profile (--ADMIN)

exports.updateProfile = catchAsyncError(async (req,res,next) => {




  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new:true,
    runValidators:true,
    useFindAmdModify:false,
  })

  
  res.status(200).json({
    success: true,
    user,
  });
});




// UPDATE user Role (--ADMIN)




// Delete User --Admin
exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  const imageId = user.avatar.public_id;

  await cloudinary.v2.uploader.destroy(imageId);

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

// Get All lawyers By Admin
exports.getAllLawyers = catchAsyncError (async (req,res,next)=>{
 const lawyers=await User.find({role:"lawyer"}) 

  res.status(200).json({
    success: true,
    lawyers,
  });

})


// Get All Approve lawyers By Admin
exports.getAllApproveLawyers = catchAsyncError (async (req,res,next)=>{
  const lawyers=await User.find({role:"lawyer",status:"approve"}) 
 
   res.status(200).json({
     success: true,
     lawyers,
   });
 
 })


 // Get All Pemding lawyers By Admin
exports.getAllPendingLawyers = catchAsyncError (async (req,res,next)=>{
  const lawyers=await User.find({role:"lawyer",status:"pending"}) 
 
   res.status(200).json({
     success: true,
     lawyers,
   });
 
 })

 
 


 // Update the Lawyer Status By Admin
exports.updateLawyerStatus = catchAsyncError (async (req,res,next)=>{
  const status=req.body.status
  const id=req.body.id
  const lawyer=await User.findById(id) 
 if(!lawyer){
  return next(
    new ErrorHander(`Lawyer does not exist with Id: ${id}`, 400)
  );
 }
 await User.findByIdAndUpdate(id,{status})
   res.status(200).json({
     success: true,
     message:`Status updated to ${status} successfuly`,
   });
 
 })



 // Search the all lawyers

 exports.searchLawyers = catchAsyncError(async (req, res, next) => {
  const { name, practice_area, province, city, budget } = req.query;

  const searchQuery = {role:"lawyer"};

  if (name) {
    searchQuery.name = { $regex: name, $options: 'i' };
  }

  if (practice_area) {
    searchQuery.practice_area = practice_area;
  }

  if (province) {
    searchQuery.province = province;
  }

  if (city) {
    searchQuery.city = city;
  }

  if (budget) {
    searchQuery.hourly_rate = { $gte: parseInt(budget) };
  }

  const lawyers = await User.find(searchQuery);

  res.status(200).json({
    success: true,
    lawyers,
    count:lawyers.length
  });
});


// Interaction Routes
exports.sendRequest = async (req, res, next) => {
  try {
    const { case_type, budget, case_description } = req.body;
    const lawyerId = req.params.lawyerId;

    const clientRequest = {
      client_id:req.user.id,
      case_type,
      budget,
      case_description,
    };

    const updatedUser = await User.findByIdAndUpdate(
      lawyerId,
      { $push: { client_requests: clientRequest } },
      { new: true, useFindAndModify: false }
    );

    res.status(200).json({
      success: true,
      message: 'Request sent successfully!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error sending request',
      error: error.message,
    });
  }
};