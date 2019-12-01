var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var adminSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  userName: String,
  password: String,
  email: String,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
