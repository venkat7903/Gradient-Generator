// Write your code here
import {ListItem, DirButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeActiveDirection, isActive} = props
  const {value, displayText} = directionDetails
  const onClickActiveDirection = () => {
    changeActiveDirection(value)
  }
  return (
    <ListItem>
      <DirButton
        type="button"
        onClick={onClickActiveDirection}
        isActive={isActive}
      >
        {displayText}
      </DirButton>
    </ListItem>
  )
}

export default GradientDirectionItem
