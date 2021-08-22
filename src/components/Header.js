import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;

    /* 색상 */
    background: ${oc.indigo[6]};
    color: white;
    border-bottom: 1px solid ${oc.indigo[7]};
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  text-align: center;
  text-decoration: none;
`;


const Header = () => (
    <Wrapper>




        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
        <StyledLink to="/bookmarks">Bookmarks</StyledLink>


        {/* <Input inputColor={"black"} placeholder='Search' primary></Input> */}



    </Wrapper>
);

export default Header;