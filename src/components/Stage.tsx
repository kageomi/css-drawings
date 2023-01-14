import styled from 'styled-components'

type Props = {
  backgroundColor: string
}

const Stage = styled.div.attrs<Props>(props => ({
  style: {
    backgroundColor: props.backgroundColor || 'white'
  }
}))`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  padding: 0.5em;
`

export { Stage }
