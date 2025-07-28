const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    phone: { type: String, unique: true, sparse: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    address: { type: String },
    addresses: [
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        zipCode: { type: String, required: true },
      }
    ],
    // Forgot password fields
    resetPasswordOTP: { type: String },
    resetPasswordOTPExpires: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
