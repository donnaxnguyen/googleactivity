// using axios and requiring models for the book schema
const axios = require("axios");
// const db = require("../models");

// creating methods for the googleController
// findAll searches the google books api 
// getting the api , then returning only the given filtered data
module.exports = {
  findAll: function (req, res) {
    const { i } = req.body
    axios
      .get("https://www.googleapis.com/books/v1/volumes" + i)
      .then(results => {
        const books = []

        results.items.forEach(book => {
          const bookData = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          }
          books.push[bookData]
        });
        
        res.json(books)
      })

  }
}
