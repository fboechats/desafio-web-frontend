import React, { useState, useEffect } from 'react'

import {
  BookList as List,
  Book,
  BookThumbnail
} from './style'

function BookList ({ books, setPage }) {
  return (
    <List>
      {books.map(book => (
        book.volumeInfo.imageLinks && (
          <Book key={book.id} onClick={() => setPage(book.id)}>
            <BookThumbnail url={book.volumeInfo.imageLinks.smallThumbnail} />
          </Book>
        )
      ))}
    </List>
  )
}

export default BookList