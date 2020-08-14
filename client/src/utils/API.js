import axios from "axios";

export default {
  // getting the books from google api
  getBooks: function(i) {
    return axios.get("/api/google", { params: { i: "title:" + i } });
  },

  // getting all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // deleting books with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // saves the book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};