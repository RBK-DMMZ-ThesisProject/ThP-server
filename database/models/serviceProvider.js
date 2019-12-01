var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var serviceProviderSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  userFirstName: String,
  userLastName: String,
  dateOfBirth: Date,
  email: String,
  userMobileNum: String,
  userImg: String,
  userWorkImg: [],
  password: String,
  ServiceCategory: String,
  ServiceDescription: String,
  ProfileState: Number, //(0 (Default New Profile),1 (under Check),2 (approved)).
  ProfileNotes: String,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var ServiceProvider = mongoose.model("ServiceProvider", serviceProviderSchema);

module.exports = ServiceProvider;
