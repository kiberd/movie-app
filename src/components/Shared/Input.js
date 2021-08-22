import styled, { css } from 'styled-components';
import oc from 'open-color';

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`

  ${props => props.search && css`

  margin: 3%;
  height: 3%;

`}

`;

export default Input;