import React, { useState, useEffect } from 'react'

import BookList from './components/BookList/BookList'
import Book from './components/Book/Book'
import BurguerIcon from './icons/BurguerIcon'
import SearchIcon from './icons/SearchIcon'

import {
  Container,
  Header,
  HeaderTitle,
  BackIcon,
  Search,
  SearchInput
} from './style'

function App() {
const [page, setPage] = useState('list')
const [query, setQuery] = useState('Design')
const [books, setBooks] = useState([])
const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then(data => setBooks(data.items));
  }, [query])

function handleSetQuery (e) {
  if (e.keyCode === 13) {
    setPage('list')
    setQuery(e.target.value || 'Design')
  }
}

  return (
    <Container onClick={() => setShowSearch(false)}>
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
        <Search
        onClick={(e) =>{
          e.stopPropagation()
          setShowSearch(!showSearch)
        }}>
          <SearchInput
            onClick={(e) =>{
              e.stopPropagation()
            }}
            showSearch={showSearch}
            onKeyDown={handleSetQuery}
          />
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
