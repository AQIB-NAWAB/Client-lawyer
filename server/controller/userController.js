const ErrorHander = require("../utilis/errorHander");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utilis/jwtToken");
const sendEmail = require('../utilis/sendEmail');
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const Request = require("../models/requestModel");
const Offer = require("../models/offerModel");
const Notification = require('../models/notificationModel')


// register a user

exports.registerUser = catchAsyncError(async (req, res, next) => {
  // Create the user first
  const {role}=req.body
  console.log({body:req.body})
  const user = await User.create(req.body);

  // Upload profile picture to Cloudinary
  if (user.role === 'client' && req.body.profile_picture_image) {
    const profileImage = await cloudinary.v2.uploader.upload(req.body.profile_picture_image, {
      folder: 'avatars',
      width: 2048,
      crop: 'scale',
    });
    user.profile_picture_image = {
      public_id: profileImage.public_id,
      url: profileImage.url,
    };
  } else if (user.role === 'lawyer' && req.body.profile_picture_image && req.body.lawyer_cnic_image && req.body.lawyer_license_image) {
    const profileImage = await cloudinary.v2.uploader.upload(req.body.profile_picture_image, {
      folder: 'avatars',
      width: 150,
      crop: 'scale',
    });
    const cnicImage = await cloudinary.v2.uploader.upload(req.body.lawyer_cnic_image, {
      folder: 'cnic',
    });
    const licenseImage = await cloudinary.v2.uploader.upload(req.body.lawyer_license_image, {
      folder: 'licenses',
    });
    user.profile_picture_image = {
      public_id: profileImage.public_id,
      url: profileImage.url,
    };
    user.lawyer_cnic_image = {
      public_id: cnicImage.public_id,
      url: cnicImage.url,
    };
    user.lawyer_license_image = {
      public_id: licenseImage.public_id,
      url: licenseImage.url,
    };
  }

  // Save the user with uploaded picture(s)
  await user.save();

  // Send the token
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




// UPDATE profile

exports.updateProfile = catchAsyncError(async (req, res, next) => {
  // Create an object to store the updated user data
  const updatedUserData = { ...req.body };

  // Check if the user is updating profile picture
  if (req.body.profile_picture_image) {
    // Upload the new profile picture to Cloudinary
    const profileImage = await cloudinary.v2.uploader.upload(req.body.profile_picture_image, {
      folder: 'avatars',
      width: 2048,
      crop: 'scale',
    });

    // Update the profile picture data in the user object
    updatedUserData.profile_picture_image = {
      public_id: profileImage.public_id,
      url: profileImage.url,
    };
  }

  // Update the user's profile with the new data
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    updatedUserData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    user: updatedUser,
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
searchQuery.status="approve"
  const lawyers = await User.find(searchQuery);

  res.status(200).json({
    success: true,
    lawyers,
    count:lawyers.length
  });
});


// ... (previous code)

// Send request to lawyer
exports.sendRequest = catchAsyncError(async (req, res, next) => {
  try {
    const { case_type, budget, case_description } = req.body;
    const lawyerId = req.params.lawyerId;

    // Create a new request
    const request = await Request.create({
      client_id: req.user.id,
      lawyer_id: lawyerId,
      case_type,
      budget,
      case_description,
    });

    // Add the request to the lawyer's requests array
    await User.findByIdAndUpdate(
      lawyerId,
      { $push: { client_requests: request._id } },
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
});

// Get all requests of a lawyer
// Get all requests of a lawyer
exports.getAllRequests = catchAsyncError(async (req, res, next) => {
  try {
    // Find the lawyer by user ID
    const lawyer = await User.findById(req.user._id);

    if (!lawyer) {
      return res.status(404).json({
        success: false,
        message: 'Lawyer not found.',
      });
    }

    // Extract client request details with client information
    const requestsWithClientDetails = [];

    for (const clientRequestId of lawyer.client_requests) {
      const clientRequest = await Request.findById(clientRequestId).populate('client_id', 'name city province _id ');

      if (clientRequest) {
        requestsWithClientDetails.push({
          _id: clientRequest._id,
          case_type: clientRequest.case_type,
          budget: clientRequest.budget,
          status:clientRequest.status,
          case_description: clientRequest.case_description,
          createdAt:clientRequest.createdAt.toLocaleDateString(),
          client: {
            name: clientRequest.client_id.name,
            city: clientRequest.client_id.city,
            province: clientRequest.client_id.province,
            clientId: clientRequest.client_id._id,
          },
        });
      }
    }

    res.status(200).json({
      success: true,
      requests: requestsWithClientDetails,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});

// Send offer to client
exports.sendOffer = catchAsyncError(async (req, res, next) => {
  try {
    const { description, rate, client_request_id } = req.body;
    const { clientId } = req.params;

    // Create a new offer
    const offer = await Offer.create({
      description,
      rate,
      lawyer_id: req.user._id,
      client_request_id,
    });

    // Add the offer to the client's offers array
    await User.findByIdAndUpdate(
      clientId,
      { $push: { lawyers_offers: offer._id } },
      { new: true, useFindAndModify: false }
    );

    res.status(200).json({
      success: true,
      message: 'Offer sent successfully!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error sending offer',
      error: error.message,
    });
  }
});

exports.sendCustomRequest = catchAsyncError(async (req, res, next) => {
  const { city, province, description, budget, case_type } = req.body;

  try {
    // Find lawyers that match the criteria
    const lawyers = await User.find({
      role: 'lawyer',
      city: city,
      province: province,
      practice_area: case_type,
      status: 'approve', 
    });

    // Create a single custom request
    const customRequest = {
      client_id: req.user._id,
      case_type: case_type,
      budget: budget,
      case_description: description,
    };

    // Send the custom request to all matching lawyers
    for (const lawyer of lawyers) {
      customRequest.lawyer_id = lawyer._id;
     const request= await Request.create(customRequest);
      // Add the request to the lawyer's requests array
      await User.findByIdAndUpdate(
        lawyer._id,
        { $push: { client_requests: request._id } },
        { new: true, useFindAndModify: false }
      );
    }

    res.status(200).json({
      success: true,
      message: 'Custom requests sent to matching lawyers.',
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message, // Include the error message in the response for debugging
    });
  }
});



// Accept lawyer's offer
exports.acceptOffer = catchAsyncError(async (req, res, next) => {
  const offerId = req.params.offerId;
  try {
    // Find the offer and mark it as accepted
    const offer = await Offer.findByIdAndUpdate(
      offerId,
      { accepted: true },
      { new: true }
    );

    if (!offer) {
      return res.status(404).json({
        success: false,
        message: 'Offer not found or you do not have permission to accept it.',
      });
    }

    // Get the client request associated with the offer
    const clientRequest = await Request.findById(offer.client_request_id);

    if (!clientRequest) {
      return res.status(404).json({
        success: false,
        message: 'Client request not found for this offer.',
      });
    }

    // Close the client request
    clientRequest.status = 'closed';
    await clientRequest.save();

    // Send the notification
    const clientUser = await User.findById(clientRequest.client_id);
    const lawyerUser = await User.findById(offer.lawyer_id);

    const notificationText = `Your offer for ${clientRequest.case_type} has been accepted by ${clientUser.name}.`;

    await Notification.create({
      user_id: lawyerUser._id,
      text: notificationText,
    });
    
    res.status(200).json({
      success: true,
      message: 'Offer accepted successfully, and notification sent.',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});
 

// Get all sent offers of lawyers

exports.getAllSentLawyerOffers = async (req, res, next) => {
  try {
    // Find the lawyer offers
    const lawyerOffers = await Offer.find({ lawyer_id: req.user._id, }).exec();

    // Create an array to store the lawyer offers with client information
    const lawyerOffersWithClientInfo = [];

    for (const lawyerOffer of lawyerOffers) {
      // Find the associated ClientRequest document using client_request_id
      const clientRequest = await Request.findById(lawyerOffer.client_request_id);

      if (clientRequest) {
        // Find the client information from the User model using client_id
        const client = await User.findById(clientRequest.client_id);

        if (client) {
          // Include the client information in the lawyer offer
          const lawyerOfferWithClient = {
            _id: lawyerOffer._id,
            client_request_id: lawyerOffer.client_request_id,
            lawyer_id: lawyerOffer.lawyer_id,
            description: lawyerOffer.description,
            rate: lawyerOffer.rate,
            accepted: lawyerOffer.accepted,
            case_type:clientRequest.case_type,
            client_info: {
              client_id: client._id,
              name: client.name,
              city: client.city,
              province: client.province,
              // Include other client information fields here as needed
            },
          };

          lawyerOffersWithClientInfo.push(lawyerOfferWithClient);
        }
      }
    }

    res.status(200).json({
      success: true,
      lawyerOffers: lawyerOffersWithClientInfo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};


// get all accepeted sent offers of a lawyers 
exports.getAllAcceptedLawyerOffers = async (req, res, next) => {
  try {
    // Find the lawyer offers
    const lawyerOffers = await Offer.find({ lawyer_id: req.user._id,accepted:true }).exec();

    // Create an array to store the lawyer offers with client information
    const lawyerOffersWithClientInfo = [];

    for (const lawyerOffer of lawyerOffers) {
      // Find the associated ClientRequest document using client_request_id
      const clientRequest = await Request.findById(lawyerOffer.client_request_id);

      if (clientRequest) {
        // Find the client information from the User model using client_id
        const client = await User.findById(clientRequest.client_id);

        if (client) {
          // Include the client information in the lawyer offer
          const lawyerOfferWithClient = {
            _id: lawyerOffer._id,
            client_request_id: lawyerOffer.client_request_id,
            lawyer_id: lawyerOffer.lawyer_id,
            description: lawyerOffer.description,
            rate: lawyerOffer.rate,
            accepted: lawyerOffer.accepted,
            case_type:clientRequest.case_type,
            client_info: {
              client_id: client._id,
              name: client.name,
              city: client.city,
              province: client.province,
              email:client.email,
              description:client.description,
              contact:client.phone,
              // Include other client information fields here as needed
            },
          };

          lawyerOffersWithClientInfo.push(lawyerOfferWithClient);
        }
      }
    }

    res.status(200).json({
      success: true,
      lawyerOffers: lawyerOffersWithClientInfo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};



// Function to get all sent requests by a client
exports.getAllSentRequestsByClient = async (req, res, next) => {
  try {
    // Find all client requests created by the current client (user)
    const clientRequests = await Request.find({ client_id: req.user._id }).exec();

    // Create an array to store the sent requests with lawyer information
    const sentRequests = [];

    for (const clientRequest of clientRequests) {
      // Find the associated lawyer information from the User model using lawyer_id
      const lawyer = await User.findById(clientRequest.lawyer_id);

      if (lawyer) {
        // Include the lawyer information in the sent request
        const sentRequestWithLawyer = {
          _id: clientRequest._id,
          client_id: clientRequest.client_id,
          lawyer_id: clientRequest.lawyer_id,
          case_type: clientRequest.case_type,
          budget: clientRequest.budget,
          case_description: clientRequest.case_description,
          lawyer_info: {
            lawyer_id: lawyer._id,
            name: lawyer.name,
            city: lawyer.city,
            province: lawyer.province,
            // Include other lawyer information fields here as needed
          },
        };

        sentRequests.push(sentRequestWithLawyer);
      }
    }

    res.status(200).json({
      success: true,
      sentRequests: sentRequests,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};






// Get and display all return offers from lawyers for any client request
exports.getClientReturnOffers = catchAsyncError(async (req, res, next) => {
  try {
    // Get the client's ID from the authenticated user
    const clientId = req.user._id; // Assuming you have the authenticated client's user ID in req.user

    // Find all client requests made by the client
    const clientRequests = await Request.find({ client_id: clientId });

    // Extract the IDs of the client's requests
    const clientRequestIds = clientRequests.map(request => request._id);

    // Find return offers related to the client's requests made by lawyers
    const clientReturnOffers = await Offer.find({
      client_request_id: { $in: clientRequestIds },
    }).populate([
      {
        path: 'client_request_id',
        populate: { path: 'client_id', select: 'name city province' },
      },
      { path: 'lawyer_id', select: 'name city province practice_area' },
    ]);

    res.status(200).json({
      success: true,
      clientReturnOffers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});




// Get all notifications for a user
exports.getAllNotifications = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get the user's ID from the request

    const notifications = await Notification.find({ user_id: userId }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      notifications,
    });
  } catch (error) {
    console.error('Error getting notifications:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// Delete a single notification
exports.deleteNotification = async (req, res, next) => {
  try {
    const notificationId = req.params.notificationId;

    // Check if the notification belongs to the user
    const userId = req.user._id; // Get the user's ID from the request
    const notification = await Notification.findById(notificationId);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: 'Notification not found.',
      });
    }

    if (notification.user_id.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to delete this notification.',
      });
    }

    // Delete the notification
    await Notification.findByIdAndDelete(notificationId);

    res.status(200).json({
      success: true,
      message: 'Notification deleted successfully.',
    });
  } catch (error) {
    console.error('Error deleting notification:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// Delete all notifications for a user
exports.deleteAllNotifications = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get the user's ID from the request

    // Delete all notifications for the user
    await Notification.deleteMany({ user_id: userId });

    res.status(200).json({
      success: true,
      message: 'All notifications deleted successfully.',
    });
  } catch (error) {
    console.error('Error deleting all notifications:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
