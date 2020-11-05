import React, { useState, useEffect } from 'react'

import BookList from './components/BookList/BookList'
import Book from './components/Book/Book'

import {
  Container,
  Header,
  HeaderTitle,
  BurguerIcon,
  BackIcon,
  Search,
  SearchIcon,
  SearchInput
} from './style'

function App() {
const [page, setPage] = useState('list')
const [query, setQuery] = useState('Guia do Mochileiro das Galaxias')
const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then(data => setBooks(data.items));
  }, [query])

function handleSetQuery (e) {
  if (e.keyCode === 13) {
    setPage('list')
    setQuery(e.target.value)
  }
}

  return (
    <Container>
      <Header>
      {page === 'list' ? (
          <BurguerIcon />
        ) : (
          <BackIcon onClick={() => setPage('list')} />
        )
      }
        <HeaderTitle>
          {`${query} Books`}
        </HeaderTitle>
        <Search>
          <SearchInput onKeyDown={handleSetQuery} />
          <SearchIcon />
        </Search>
      </Header>
      {page === 'list' ? (
        <BookList
          books={books}
          query={query}
          setPage={setPage}
        />
      ) : (
          <Book
            book={books.find(book => book.id === page)}
            setPage={setPage}
          />
        )
      }
    </Container>
  );
}

export default App;
