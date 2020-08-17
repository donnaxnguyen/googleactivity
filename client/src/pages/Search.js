import React, { useState, useRef } from "react";
import Banner from "../components/Banner";
import ListContainer from '../components/ListContainer'
import API from "../utils/API"

function Search() {
  const [results, setresults] = useState([]);

  const input = useRef("")

  const search = (e) => {
    e.preventDefault()
    const title = input.current.value.replace(/ /g,"+");
    API.getBooks(title)
    .then(results =>{
      console.log(results);
      const books =[];
      results.data.items.forEach(book => {
        const bookData = {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.infoLink
        }
        books.push(bookData)
      });

      setresults(books)
    }).catch(err => console.log(err))
  }

  return (
  <div>
    <Banner/>
    <form className="form-group mt-5">
      <div className="form-group">
      <label for="title">Search by Keyword</label>
      <input type="text" className="form-control" id="search" placeholder="Search for a book here" ref={input}/>
     </div>
       <button type="submit" className="btn btn-primary" onClick={(e) => search(e)}>Submit</button>
    </form>
    <ListContainer results={results}/>
  </div>

  );
}


export default Search;