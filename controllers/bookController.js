//requiring the models folder for the books schema
const db = require("../models");

// defining the methods for the bookController

//find all books
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)

  },
  // find by id
  findById: function(req, res) {
    db.Book.findById(req.params.id)

  },
  // creating
  create: function(req, res) {
    db.Book.create(req.body)

  },
  //update
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)

  },
  //remove
  remove: function(req, res) {
    db.Book.findById(req.params.id)

  }
};