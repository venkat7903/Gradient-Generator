import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGenContainer,
  FormContainer,
  AppTitle,
  AppInfo,
  DirectionList,
  ColorsContainer,
  ColorContainer,
  Input,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    colorInput1: '#8ae323',
    colorInput2: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  onGenerate = event => {
    event.preventDefault()
    const {colorInput1, colorInput2, activeDirection} = this.state
    this.setState({
      color1: colorInput1,
      color2: colorInput2,
      direction: activeDirection,
    })
  }

  changeActiveDirection = value => {
    this.setState({activeDirection: value})
  }

  changeColor1 = event => {
    this.setState({colorInput1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({colorInput2: event.target.value})
  }

  renderDirectionsList = () => {
    const {activeDirection} = this.state
    return (
      <DirectionList>
        {gradientDirectionsList.map(each => (
          <GradientDirectionItem
            key={each.directionId}
            directionDetails={each}
            isActive={activeDirection === each.value}
            changeActiveDirection={this.changeActiveDirection}
          />
        ))}
      </DirectionList>
    )
  }

  render() {
    const {colorInput1, colorInput2, color1, color2, direction} = this.state
    console.log(direction)
    return (
      <GradientGenContainer
        color1={color1}
        color2={color2}
        direction={`to ${direction}`}
        data-testid="gradientGenerator"
      >
        <FormContainer onSubmit={this.onGenerate}>
          <AppTitle>Generate a CSS Color Gradient</AppTitle>
          <AppInfo>Choose Direction</AppInfo>
          {this.renderDirectionsList()}
          <AppInfo>Pick The Colors</AppInfo>
          <ColorsContainer>
            <ColorContainer>
              <AppInfo>{colorInput1}</AppInfo>
              <Input
                type="color"
                value={colorInput1}
                onChange={this.changeColor1}
              />
            </ColorContainer>
            <ColorContainer>
              <AppInfo>{colorInput2}</AppInfo>
              <Input
                type="color"
                value={colorInput2}
                onChange={this.changeColor2}
              />
            </ColorContainer>
          </ColorsContainer>
          <GenerateBtn type="submit">Generate</GenerateBtn>
        </FormContainer>
      </GradientGenContainer>
    )
  }
}

export default GradientGenerator
