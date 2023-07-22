import {
  GameEndContainer,
  ResultContainer,
  ContestantContainer,
  Heading,
  Result,
  ResultImg,
  PlayAgain,
} from './styledComponents'

const GameResultView = props => {
  const {finalResult, gamePlayMode} = props
  const {userChoiceImg, opponentChoiceImg, matchResult} = finalResult

  const resetGamePlay = () => {
    gamePlayMode()
  }

  const result = (
    <GameEndContainer>
      <ResultContainer>
        <ContestantContainer>
          <Heading>YOU</Heading>
          <ResultImg src={userChoiceImg} alt="your choice" />
        </ContestantContainer>
        <ContestantContainer>
          <Heading>OPPONENT</Heading>
          <ResultImg src={opponentChoiceImg} alt="opponent choice" />
        </ContestantContainer>
      </ResultContainer>
      <Result>{matchResult}</Result>
      <PlayAgain onClick={resetGamePlay}>Play Again</PlayAgain>
    </GameEndContainer>
  )
  return result
}

export default GameResultView
