import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GamePlayItem from '../GamePlayItem'
import GameResultView from '../GameResultView'

import {
  AppContainer,
  TopContainer,
  GameNameContainer,
  GameName,
  ScoreCard,
  ScoreName,
  Score,
  GamePlayContainer,
  Rules,
  Close,
  PopupContainer,
  RulesImg,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GamePlayView extends Component {
  state = {
    userChoiceImg: '',
    opponentChoiceImg: '',
    showResult: false,
    matchResult: '',
    score: 0,
  }

  gameResultUpdate = (userImg, userImgId, opponentId, opponentImg) => {
    if (userImgId === 'ROCK' && opponentId === 'SCISSORS') {
      this.setState(prevState => ({
        userChoiceImg: userImg,
        opponentChoiceImg: opponentImg,
        showResult: true,
        matchResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    }
    if (userImgId === 'ROCK' && opponentId === 'PAPER') {
      this.setState(prevState => ({
        userChoiceImg: userImg,
        opponentChoiceImg: opponentImg,
        showResult: true,
        matchResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
    if (userImgId === 'SCISSORS' && opponentId === 'PAPER') {
      this.setState(prevState => ({
        userChoiceImg: userImg,
        opponentChoiceImg: opponentImg,
        showResult: true,
        matchResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    }
    if (userImgId === 'SCISSORS' && opponentId === 'ROCK') {
      this.setState(prevState => ({
        userChoiceImg: userImg,
        opponentChoiceImg: opponentImg,
        showResult: true,
        matchResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
    if (userImgId === 'PAPER' && opponentId === 'ROCK') {
      this.setState(prevState => ({
        userChoiceImg: userImg,
        opponentChoiceImg: opponentImg,
        showResult: true,
        matchResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    }
    if (userImgId === 'PAPER' && opponentId === 'SCISSORS') {
      this.setState(prevState => ({
        userChoiceImg: userImg,
        opponentChoiceImg: opponentImg,
        showResult: true,
        matchResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
    if (userImgId === opponentId) {
      this.setState({
        userChoiceImg: userImg,
        opponentChoiceImg: opponentImg,
        showResult: true,
        matchResult: 'IT IS DRAW',
      })
    }
  }

  userSelectedImage = (img, id) => {
    const random = Math.floor(Math.random() * 3)
    const userImg = img
    const userImgId = id

    const opponentImg = choicesList[random].imageUrl
    const opponentId = choicesList[random].id
    this.gameResultUpdate(userImg, userImgId, opponentId, opponentImg)
  }

  gamePlayMode = () => {
    this.setState({showResult: false})
  }

  renderGamePlayContainer = () => (
    <GamePlayContainer>
      {choicesList.map(eachChoice => (
        <GamePlayItem
          key={eachChoice.id}
          choice={eachChoice}
          userSelectedImage={this.userSelectedImage}
        />
      ))}
    </GamePlayContainer>
  )

  renderResultView = () => {
    const {userChoiceImg, opponentChoiceImg, matchResult} = this.state
    const finalResult = {userChoiceImg, opponentChoiceImg, matchResult}
    return (
      <>
        <GameResultView
          finalResult={finalResult}
          gamePlayMode={this.gamePlayMode}
        />
      </>
    )
  }

  renderPopUp = () => (
    <Popup trigger={<Rules type="button">Rules</Rules>} modal>
      {close => (
        <PopupContainer>
          <Close type="button" onClick={close}>
            <RiCloseLine size="20" />
          </Close>
          <RulesImg
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupContainer>
      )}
    </Popup>
  )

  render() {
    const {showResult, score} = this.state
    const mainApp = (
      <AppContainer>
        <TopContainer>
          <GameNameContainer>
            <GameName>ROCK PAPER SCISSORS</GameName>
          </GameNameContainer>
          <ScoreCard>
            <ScoreName>Score</ScoreName>
            <Score>{score}</Score>
          </ScoreCard>
        </TopContainer>

        {showResult ? this.renderResultView() : this.renderGamePlayContainer()}
        {this.renderPopUp()}
      </AppContainer>
    )
    return mainApp
  }
}

export default GamePlayView
