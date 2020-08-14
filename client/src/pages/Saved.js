import React, { Component } from "react";
// import "./style.css";
import Navbar from "../components/Navbar/index"

<<<<<<< HEAD
// importing apis 
import API from "../utils/API";

// adding empty array of books
class Saved extends Component {
  state = {
    books: []
  };

// executing the page and gettin gthe saved books
  componentDidMount() {
    this.getSavedBooks();
  }

  // getting the saved books, then using setstate to grab current data
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // when user deletes book, this will grab updated saved books data
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

// had to delete function Saved because react uses render and i called the class Saved above
 
render() {
    return (
=======
function Saved() {
  return (

>>>>>>> baecc27e6086d0f9064bcdf800aee732ca67501d
<div>
    This is saved
</div>
  );
}
}

export default Saved;