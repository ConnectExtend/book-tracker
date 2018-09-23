import React from 'react'
import SearchPg from './SearchPg';
import MainPg from './MainPg';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
      <MainPg />
      </div>
    )
  }
}

export default BooksApp
