//requiring the models folder for the books schema
const db = require("../models");

// defining the methods for the bookController

//find all books
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  // find by id
  findById: function(req, res) {
    db.Book.findById(req.params.id)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  // creating
  create: function(req, res) {
    db.Book.create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  //update
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },
  //remove
  remove: function(req, res) {
    db.Book.findById(req.params.id)
    .then(dbBook => dbBook.remove())
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  }
};