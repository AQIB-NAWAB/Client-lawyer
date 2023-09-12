const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const ErrorHander = require("../utilis/errorHander");

exports.isAuthebticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);

  if (!token) {
    return next(new ErrorHander("please login to access this recsource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});



// Authorize Roles --admin

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }

    next();
  };
};

exports.checkApprovedStatus=(req, res, next)=> {
  if (req.user.status !== "approve") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Your status is not approved.",
    });
  }
  next();
}

