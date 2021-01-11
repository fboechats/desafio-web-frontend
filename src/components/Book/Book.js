import React, { useState } from 'react'

import StarIcon from '../../icons/StarIcon'

import {
  Container,
  BookThumbnail,
  BookInfo,
  BookTitle,
  BookAuthor,
  BookPrice,
  CtaButtons,
  BookPages,
  BuyButton,
  LikeButton,
  Description,
  Row
} from './style'

function BookList ({ book }) {
const [like, setLike] = useState(false)
const [rate, setRate] = useState(0)
console.log(book)
const {
  volumeInfo: {
    imageLinks: {
      smallThumbnail
    },
    title,
    description,
    authors,
    publisher,
    pageCount
  },
  saleInfo: {
    listPrice,
    buyLink
  }
} = book

  return (
    <>
    <Container>
      <BookThumbnail url={smallThumbnail} />
      <BookInfo>
        <BookTitle>
          {title}
        </BookTitle>
        <BookAuthor>
          {authors ? `by ${authors[0]}` : `by ${publisher}`}
        </BookAuthor>
        <Row>
          <BookPrice>
            {listPrice
              ? `${listPrice.currencyCode} ${listPrice.amount}`
              : 'Unavailable'
            }
          </BookPrice>
          <StarIcon
            onClick={() => setRate(1)}
            color={rate >= 1 ? '#000000' : 'rgba(0, 0, 0, 0.1)'}
          />
          <StarIcon
            onClick={() => setRate(2)}
            color={rate >= 2 ? '#000000' : 'rgba(0, 0, 0, 0.1)'}
          />
          <StarIcon
            onClick={() => setRate(3)}
            color={rate >= 3 ? '#000000' : 'rgba(0, 0, 0, 0.1)'}
          />
          <StarIcon
            onClick={() => setRate(4)}
            color={rate >= 4 ? '#000000' : 'rgba(0, 0, 0, 0.1)'}
          />
          <StarIcon
            onClick={() => setRate(5)}
            color={rate >= 5 ? '#000000' : 'rgba(0, 0, 0, 0.1)'}
          />
        </Row>
      </BookInfo>
    </Container>
    <CtaButtons>
        <BookPages>
          {pageCount && `${pageCount} pages`}
        </BookPages>
        <BuyButton target='_blank' href={buyLink}>
          BUY
        </BuyButton>
        <LikeButton
          onClick={() => setLike(!like)}
          isActive={like}
        />
      </CtaButtons>
    <Description>
      {description || 'No description available for this book. :('}
    </Description>
  </>
  )
}

export default BookList