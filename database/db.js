const mongoose = require("mongoose");

const URI =
  process.env.mongoURI ||
  "mongodb+srv://mays:123456789rbk@cluster0-bju6o.mongodb.net/sheghilhom?retryWrites=true&w=majority";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("We are connected");
});

module.exports = {
  Admin: require("./models/admin"),
  CustomerReviews: require("./models/customerReviews"),
  Customers: require("./models/customers"),
  Msges: require("./models/msges"),
  ServiceProvider: require("./models/serviceProvider"),
  SpHires: require("./models/spHires"),
  Favorites: require("./models/favorites")
};
