// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 49%;
  margin: 6px 0px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    width: 32%;
  }
  @media (min-width: 992px) {
    width: 24%;
  }
`
export const DirButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
