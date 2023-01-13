import { FC } from 'react'
import styled from 'styled-components'

// reference: https://www.freecodecamp.org/news/learn-css-create-the-git-logo/

const Stage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: azure;
  border-radius: 10%;
`
const Square = styled.div`
  aspect-ratio: 1 / 1;
  width: 73%;
  background-color: #f06033;
  border-radius: 7.3%;
  position: relative;
  transform: rotate(45deg);
`
const Line1 = styled.div`
  width: 75%;
  background-color: white;
  height: 8.3%;
  top: 26%;
  // left: -0.1%; this line is not drew completely at the edge of the Square
  position: absolute;
  &:before {
    content: '';
    aspect-ratio: 1 / 1;
    width: 27.2%;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    top: -75%;
    left: 27.2%;
  }
  &:after {
    aspect-ratio: 1 / 1;
    width: 27.2%;
    content: '';
    position: absolute;
    background-color: white;
    border-radius: 50%;
    top: -75%;
    left: 80%;
  }
`
const Line2 = styled.div`
  width: 55%;
  background-color: white;
  height: 8.3%;
  top: 49%;
  left: 26%;
  position: absolute;
  transform: rotate(45deg);
  &:before {
    content: '';
    aspect-ratio: 1 / 1;
    width: 37.2%;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    top: -72%;
    left: 75%;
  }
`

const GitLogo: FC = () => {
  return (
    <Stage id="git-logo">
      <Square>
        <Line1 />
        <Line2 />
      </Square>
    </Stage>
  )
}

export { GitLogo }
