const router = require("express").Router();
// going to create controllers folder to return results
const googleController = require("../../controllers/googleController");

// matching with google controller to find results
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;