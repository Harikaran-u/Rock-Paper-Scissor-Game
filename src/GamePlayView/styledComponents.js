import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 50px;
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TopContainer = styled.div`
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`
export const GameNameContainer = styled.div`
  padding: 10px;
  width: 100px;
`
export const GameName = styled.h1`
  font-family: 'Bree Serif';
  font-size: 21px;
  color: #fff;
  font-weight: 400;

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`
export const ScoreCard = styled.div`
  border: 0px solid;
  border-radius: 5px;
  background-color: #fff;
  width: 200px;
  text-align: center;

  @media screen and (max-width: 576px) {
    width: 100px;
  }
`
export const ScoreName = styled.p`
  font-family: 'Bree Serif';
  font-size: 21px;
  color: #fff;
  font-weight: 400;
  color: #223a5f;

  @media screen and (max-width: 576px) {
    font-size: 12px;
    font-weight: bold;
  }
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #223a5f;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const GamePlayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
  width: 500px;
  justify-content: center;
  @media screen and (max-width: 576px) {
    max-width: 480px;
  }
`
export const Rules = styled.button`
  border: 0px solid;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Bree Serif';
  color: #223a5f;
  outline: none;
  cursor: pointer;
  height: 36px;
  width: 96px;
  align-self: flex-end;

  @media screen and (max-width: 576px) {
    align-self: center;
    margin-top: 20px;
    height: 25px;
    width: 60px;
    font-size: 10px;
  }
`
export const PopupContainer = styled.div`
  padding: 50px;
  background-color: #fff;
  border: 0px solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    max-width: 380px;
    padding: 20px;
    margin-right: 40px;
  }
`

export const Close = styled.button`
  outline: none;
  cursor: pointer;
  height: 28px;
  width: 28px;
  border: 0px solid;
  border-radius: 4px;
  padding: 5px;
  align-self: flex-end;
`

export const RulesImg = styled.img`
  width: 50%;
  align-self: center;
`
