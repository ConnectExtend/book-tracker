import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    let displayedThumbnail = this.props.book.imageLinks ?
      this.props.book.imageLinks.thumbnail : '';
    let authors = this.props.book.authors;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={
              {
                width: 128,
                height: 193,
                backgroundImage: `url("${displayedThumbnail}")`
              }
            }
          >
          </div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => this.props.moveShelf(
                this.props.book, e.target.value
              )}
              value = { this.props.currentShelf }
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Already Enjoyed</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {Object.keys(authors).map(key => <p key={key}>{authors[key]}</p>)}
        </div>
      </div>
    );
  }
}

export default Book;
