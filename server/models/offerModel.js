const mongoose = require("mongoose");

const lawyerOfferSchema = new mongoose.Schema({
    client_request_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClientRequest", // Reference to the Client Request
    required: true,
  },
  lawyer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the Lawyer (User) making the offer
    required: true,
  },
  description: String,
  rate: Number,
  accepted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("LawyerOffer", lawyerOfferSchema);
