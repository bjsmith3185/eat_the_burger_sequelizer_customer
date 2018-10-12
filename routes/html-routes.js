var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burgers.findAll({
      include: [db.Customers]
    }).then(function (data) {

      var burgers = {
        burgers: data
      }

      res.render("index", burgers)
    });
  });


};