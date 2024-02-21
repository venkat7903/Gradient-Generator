// Style your elements here
import styled from 'styled-components'

export const GradientGenContainer = styled.div`
  background-image: linear-gradient(
    ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  min-height: 100vh;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 40px 0px;
`
export const FormContainer = styled.form`
  text-align: center;
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AppTitle = styled.h1`
  color: #ffffff;
  font-size: 27px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`

export const AppInfo = styled.p`
  color: #ededed;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const DirectionList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;
`
export const Input = styled.input`
  border: none;
  padding: 0;
  background: transparent;
  margin: 0;
  outline: none;
  height: 50px;
  width: 100px;
`

export const GenerateBtn = styled.button`
  background: #00c9b7;
  color: #1e293b;
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  font-weight: 600;
  border-radius: 6px;
`
