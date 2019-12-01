var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var favoritesSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  customerID: Number,
  serviceProviderID: Number,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Favorites = mongoose.model("Favorites", favoritesSchema);

module.exports = Favorites;
