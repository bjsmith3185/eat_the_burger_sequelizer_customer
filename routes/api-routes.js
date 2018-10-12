var db = require("../models");

module.exports = function (app) {

  app.post("/api/burger/add", function (req, res) {
  
    db.Burgers.create({
      burger_name: req.body.burger,
      CustomerId: req.body.customer_id
    
    }).then(function (result) {
     
      // res.redirect("/");
      res.json(result);
    });
  });


  app.put("/api/update/:id", function (req, res) {
    db.Burgers.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);

    })
  });

  
};