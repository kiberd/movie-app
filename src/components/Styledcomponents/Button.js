import styled, { css } from 'styled-components';

const Button = styled.a`
  
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  text-align: center;
  text-decoration: none;


  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`

export default Button;