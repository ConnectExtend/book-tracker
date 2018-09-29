import React from 'react';
import { Route } from 'react-router-dom';
import SearchPg from './SearchPg';
import MainPg from './MainPg';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll()
          .then((books) => {
            this.setState({ books })
          })
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPg
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPg
            moveShelf={this.moveShelf}
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp;
