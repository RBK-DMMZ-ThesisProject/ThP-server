var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var adminSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  adminName: String,
  password: String,
  email: String,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
