import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 600px;
  padding: 0 20px;
`

export const BookThumbnail = styled.image`
  background: url(${({ url }) => url});
  width: 128px;
  height: 192px;
  margin-right: 20px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
`

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 187px;
`

export const BookTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
`

export const BookAuthor = styled.p`
  color: rgba(0,0,0,0.3);
  font-size: 12px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const BookPrice = styled.span`
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
`

export const CtaButtons = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`

export const BookPages = styled.p`
  color: rgba(0,0,0,0.3);
  font-size: 12px;
  margin-left: 45px;
`

export const BuyButton = styled.a`
  width: 100px;
  padding: 7px 20px;
  background: #5091fa;
  border-radius: 20px;
  margin-right: 20px;
  margin-left: auto;
  transform: translate(70px, 0);
  text-decoration: none;
  color: #FFFFFF;
  font-size: 12px;
  text-align: center;

  &:hover {
    filter: brightness(1.1);
  }
`
 
export const LikeButton = styled.span`
  width: 100px;
  height: 100px;
  transform: translate(25px, 0) scale(0.3);
  border-radius: 50%;
  cursor: pointer;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") #ff7a7a;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;
  -webkit-tap-highlight-color: transparent;
  
  ${({ isActive }) => isActive && `
    transition-duration: 1s;
    background-position: -2800px 0;
  `}

  &:hover {
    filter: brightness(1.1);
  }
`

export const Description = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 40px auto;
  background: #FFFFFF;
  font-size: 20px;
  padding: 40px;
`