import styled, { css } from 'styled-components';
import oc from 'open-color';

const Button = styled.button`
  background: ${props => props.primary ?  oc.indigo[6] :  "white" };
  color: ${props => props.primary ? "white" : oc.indigo[6]};
  cursor: pointer;
  height: 4%;


  ${props => props.search && css`
 
   justify-content: center;
   align-items: center;
   margin: 5%;
   
`}


`;

export default Button;