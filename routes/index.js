const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// using apiroutes
router.use("/api", apiRoutes);

// if no apis are used , send the react app 
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;