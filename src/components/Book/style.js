import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 600px;
  margin: 40px auto;
`

export const BookThumbnail = styled.image`
  background: url(${({ url }) => url});
  width: 128px;
  height: 192px;
  border-radius: 10px;
  margin-right: 20px;
`

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BookTitle = styled.p`
  font-size: 24px;
`

export const BookPrice = styled.span`
  font-size: 24px;
`

export const CtaButtons = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`

export const BuyButton = styled.a`
  width: 100px;
  padding: 16px 20px;
  background: #5091fa;
  border-radius: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: #000000;
  text-align: center;

  &:hover {
    filter: brightness(1.1);
  }
`
 
export const LikeButton = styled.span`
  width: 100px;
  height: 100px;
  transform: scale(0.6);
  border-radius: 50%;
  cursor: pointer;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") #ff7a7a;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;
  
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