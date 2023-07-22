import {GameButton, GameImage} from './styledComponents'

const GamePlayItem = props => {
  const {choice, userSelectedImage} = props
  const {imageUrl, id} = choice
  const sendMeUserChoice = () => {
    userSelectedImage(imageUrl, id)
  }
  const gamePlay = (
    <GameButton
      type="button"
      onClick={sendMeUserChoice}
      data-testid={`${id.toLowerCase()}Button`}
    >
      <GameImage src={imageUrl} alt={id} />
    </GameButton>
  )
  return gamePlay
}

export default GamePlayItem
