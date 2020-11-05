import styled from 'styled-components'

export const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 40px;
  max-width: 600px;
  margin: 0 auto;
`

export const Book = styled.div`
  display: flex;
  flex: 27%;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform .3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

export const BookThumbnail = styled.image`
  background: url(${({ url }) => url});
  width: 128px;
  height: 192px;
  border-radius: 10px;
`