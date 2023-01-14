import { FC } from 'react'
import styled from 'styled-components'

const Square = styled.div`
  aspect-ratio: 1/1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TopLief = styled.div`
  height: calc(100% / 3);
  width: 100%;
  display: flex;
  justify-content: center;
  &:before {
    content: '';
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #f24e1d;
  }
  &:after {
    content: '';
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #ff7262;
  }
`

const MiddleLief = styled.div`
  height: calc(100% / 3);
  width: 100%;
  display: flex;
  justify-content: center;
  &:before {
    content: '';
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #a259ff;
  }
  &:after {
    content: '';
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
    background-color: #1bbcfe;
  }
`

const BottomLief = styled.div`
  height: calc(100% / 3);
  width: 100%;
  display: flex;
  justify-content: center;
  &:before {
    content: '';
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
    border-top-right-radius: 0;
    background-color: #09cf82;
  }
  &:after {
    content: '';
    aspect-ratio: 1/1;
    height: 100%;
  }
`

const FigmaLogo: FC = () => {
  return (
    <Square>
      <TopLief />
      <MiddleLief />
      <BottomLief />
    </Square>
  )
}

export { FigmaLogo }
