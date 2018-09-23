import React from 'react'
import SearchPg from './SearchPg';
import MainPg from './MainPg';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  /*
   * getAll()
   * returns a Promise which resolves to a JSON object containing a collection of book objects
   * this collection represents the books currently in the bookshelves in your app
  */
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }

  /*
   * update()
   * returns a Promise which resolves to a JSON object containing the response data of the POST request
  */
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <MainPg 
          books = { this.state.books }
          moveShelf = { this.moveShelf }
        />
      </div>
    )
  }
}

export default BooksApp
