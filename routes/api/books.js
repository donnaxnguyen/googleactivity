const router = require("express").Router();

// going to create  a book control file to create methods
const bookController = require("../../controllers/bookController");

// matching with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// matching with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;