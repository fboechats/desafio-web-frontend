import React, { useState } from 'react'

import {
  Container,
  BookThumbnail,
  BookInfo,
  BookTitle,
  BookPrice,
  CtaButtons,
  BuyButton,
  LikeButton,
  Description
} from './style'

function BookList ({ book }) {
const [like, setLike] = useState(false)

const {
  volumeInfo: {
    imageLinks: {
      smallThumbnail
    },
    title,
    description
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
        <BookPrice>
          {listPrice
            ? `${listPrice.currencyCode} ${listPrice.amount}`
            : 'Unavailable'
          }
        </BookPrice>
        <CtaButtons>
          <BuyButton target='_blank' href={buyLink}>
            BUY
          </BuyButton>
          <LikeButton
            onClick={() => setLike(!like)}
            isActive={like}
          />
        </CtaButtons>
      </BookInfo>
    </Container>
    <Description>
      {description}
    </Description>
  </>
  )
}

export default BookList