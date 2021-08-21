import styled, { css } from 'styled-components';

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  border: none;
  border-radius: 3px;

  ${props => props.primary && css`
  background: white;
  color: black;
`}

`;

export default Input;