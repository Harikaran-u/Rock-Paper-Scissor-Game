import styled from 'styled-components'

export const GameButton = styled.button`
  border: 0px solid;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 10px;
`
export const GameImage = styled.img`
  height: 184px;
  width: 184px;

  @media screen and (max-width: 576px) {
    height: 90px;
    width: 90px;
  }
`
