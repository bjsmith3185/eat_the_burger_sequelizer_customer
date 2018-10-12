var db = require("../models");

module.exports = function (app) {

  app.get("/api/customers", function (req, res) {
    db.Customers.findAll({}).then(function (data) {
      res.json(data)
    });
  });


  app.post("/api/customer/add", function (req, res) {
    console.log("inside routes-post")
    console.log(req.body.customer_name);
    db.Customers.create({
      customer_name: req.body.customer_name,


    }).then(function (result) {
      // res.redirect("/");
      res.json(result);
    });
  });


};