const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  }
});

module.exports = mongoose.model("Notification", notificationSchema);
