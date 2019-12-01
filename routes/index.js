const express = require("express");
const router = express.Router();
const db = require("../database/db");
// router.get("/", (req, res) => {
//   res.send("heloooo");
// });
app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});
// //Api that gits all the information from the ServiceProvider table dependding on the data sent
// router.get("/categories", (req, res) => {
//   db.ServiceProvider.find({ ServiceCategory: req.data }).then(items => {
//     res.json(items);
//   });
// });

// //Api that gits all the information from the favorites table dependding on the data sent
// router.get("/favorites", (req, res) => {
//   db.Favorites.find({ serviceProviderID: req.data }).then(items => {
//     res.json(items);
//   });
// });

// //Api that gits all the information from the CustomerReviews table dependding on the data sent
// router.get("/reviews", (req, res) => {
//   db.CustomerReviews.find({ id: req.data }).then(items => {
//     res.json(items);
//   });
// });

// //Api that saves information in the CustomerReviews table dependding on the data sent
// router.post("/reviews", (req, res) => {
//   db.CustomerReviews.save(req.data);
// });

// //Api that saves  information in the ServiceProvider table dependding on the data sent
// router.post("/newHandy", (req, res) => {
//   db.ServiceProvider.save(req.data);
// });

// //Api that saves  information in the Customers table dependding on the data sent
// router.post("/newCustomer", (req, res) => {
//   db.Customers.save(req.data);
// });

// //Api that gets  information from the Customers table dependding on the data sent
// router.get("/customer", (req, res) => {
//   db.Customers.find(req.data);
// });

// //Api that saves  information in the Msges table dependding on the data sent
// router.post("/newCustomer", (req, res) => {
//   db.Msges.save(req.data);
// });

// //Api that gets  information from the Msges table dependding on the data sent
// router.get("/customer", (req, res) => {
//   db.Msges.find(req.data);
// });

module.exports = router;
