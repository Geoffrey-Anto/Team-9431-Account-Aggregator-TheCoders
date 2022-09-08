const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
  IFSCcode: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Bank", bankSchema);
