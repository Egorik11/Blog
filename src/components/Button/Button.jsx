import { styled } from "styled-components"

const Button = styled.button`
  color: ${({color}) => color ? color : '#fff'};
  border: none;
  background-color: ${({type}) => type? type: '#FFD2DD'};
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  padding: 15px 25px;
  border-radius: 8px;
  letter-spacing: ${({spacing}) => spacing? spacing: ''};
`

export {Button}
