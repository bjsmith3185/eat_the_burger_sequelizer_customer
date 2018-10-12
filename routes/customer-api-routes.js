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
      res.redirect("/");
      // res.json(result);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  // app.delete("/api/todos/:id", function(req, res) {

  // });

//   app.put("/api/update/:id", function (req, res) {
//     db.Burgers.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     }).then(function (result) {
//       res.json(result);

//     })
//   });

  //------------ routes for customers model -------------


//   app.post("/api/new", function (req, res) {
//     console.log("its getting to the routes file!!!!!")
//     console.log(req.body);
//     db.Customers.create({
//      customer_name: req.body.name,
    
//     }).then(function (result) {
//       res.redirect("/");
//       // res.json(result);
//     });
//   });


};