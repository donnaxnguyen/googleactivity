const path = require("path");
const router = require("express").Router();

// requiring books and google for routing 
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// routing to books
router.use("/books", bookRoutes);

// routing to google
router.use("/google", googleRoutes);

// going to render the html page for anything else
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;