//Server
const express = require("express");
const htmlRouting = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// All routes
htmlRouting(app);
apiRoutes(app);

// Listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});