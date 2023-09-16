const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lawyer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  case_type: String,
  budget: Number,
  case_description: String,
  status: {
    type: String,
    enum: ["pending", "accepted", "closed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ClientRequest", requestSchema);