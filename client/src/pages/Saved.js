import React, { Component } from "react";
// import "./style.css";
import Navbar from "../components/Navbar/index"

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
<Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search and Save Books</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      title={book.title}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image} 
                      link={book.link}
                      
                      Button={() => (
                        <button onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2">
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;