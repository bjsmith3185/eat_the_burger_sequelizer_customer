
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
  extended: true
}))

// Static directory
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"))

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/customer-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT + "/");
  });
});
