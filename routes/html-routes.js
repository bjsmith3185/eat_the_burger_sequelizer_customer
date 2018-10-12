var db = require("../models");

module.exports = function (app) {


  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function (data) {

      var burgers = {
        burgers: data
      }
      res.render("index2", burgers)


    });
  });


  app.post("/api/add", function (req, res) {
    console.log(req.body.name);
    db.Burgers.create({
      burger_name: req.body.name,
      // customer: req.body.customer

    }).then(function (result) {
      res.redirect("/");
      // res.json(result);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  // app.delete("/api/todos/:id", function(req, res) {

  // });

  app.put("/api/update/:id", function (req, res) {
    db.Burgers.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);

    })
  });

  //------------ routes for customers model -------------


  // app.post("/api/new", function (req, res) {
  //   console.log("its getting to the routes file!!!!!")
  //   console.log(req.body);
  //   db.Customers.create({
  //    customer_name: req.body.name,
    
  //   }).then(function (result) {
  //     res.redirect("/");
  //     // res.json(result);
  //   });
  // });












};