import styled from 'styled-components'

export const GameEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`
export const ContestantContainer = styled(GameEndContainer)`
  justify-content: space-between;
`
export const Result = styled.p`
  font-family: 'Roboto';
  font-size: 21px;
  color: #fff;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 21px;
  color: #fff;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const ResultImg = styled.img`
  @media screen and (max-width: 576px) {
    width: 80%;
  }
  width: 50%;
`
export const PlayAgain = styled.button`
  outline: none;
  cursor: pointer;
  height: 42px;
  width: 100px;
  border: 0px solid;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Bree Serif';
  color: #223a5f;
  margin-top: 20px;

  @media screen and (max-width: 576px) {
    height: 36px;
    width: 80px;
  }
`
