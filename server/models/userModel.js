const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  // The General Data to saved for both client and lawyer
  name: {
    type: String,
    required: [true, "please enter your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 5 characters"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minLength: [8, "Name should have more than 8 characters"],
    select: false,
  },
  city: {
    type: String,
    required: [true, "please enter your City Name"],
  },
  province: {
    type: String,
    required: [true, "please enter your province Name"],
  },
  profile_picture_image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  // Data for Lawyer to be  saved 
  lawyer_license_image:{
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  lawyer_cnic_image:{
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  practice_area:{
    type:String
  },
  role: {
    type: String,
    default: "client",
  },
  status:{
    type:String,
    default:"pending"
  },
  // Lawyer Further Details
  hourly_rate:{
    type:Number,
    default:0
  },
  phone:{
    type:String
  },
  office:{
    type:String,
    default:""
  },
  description:{
    type:String,
    default:""

  },
  past_work:[
    {
      case_date:{
        type:String
      },
      case_type:{
        type:String
      },
      court:{
        type:String
      }

    }
  ],
  education:[
    {
      qualification:{
        type:String
      },
      institute:{
        type:String
      },
      graduation_year:{
        type:String
      }
    }
  ],
  certificates:[
    {
      institute:{
        type:String
      },
      graduation_year:{
        type:String
      }
    }
  ],
  services:[
    {
      service:{
      type:String

    }
  }
  ],
  client_requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClientRequest", // Reference to ClientRequest model
    },
  ],
  lawyers_offers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LawyerOffer", // Reference to LawyerOffer model
    },
  ],
  my_clients:[
    {
      client_id:mongoose.Schema.Types.ObjectId,
    }
  ],
  my_lawyers:[
    {
      lawyer_id:mongoose.Schema.Types.ObjectId,
    }
  ],
  createdAt:{
    type:Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.pre("save", function (next) {
  if (this.isModified("role") && this.role === "client") {
    this.status = "approved"; // Automatically set status to "approved" for client users
  }
  next();
});

//JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
};

// compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// generating password reset token
userSchema.methods.getResetPasswordToken = function () {
  // generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding to user schema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15*60*1000;

  return resetToken;

};

module.exports = mongoose.model("User", userSchema);
