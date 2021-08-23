import React from "react";
import styled from "styled-components";
import {media} from 'lib/style-utils';

const Wrapper = styled.div`
  padding-top: 5vh; /* 헤더 높이 */
  background-color: ${props => props.theme.colors.bgColor}; //props.theme 를 통해 값을 주입받을수 있습니다
  color: ${props => props.theme.colors.titleColor};
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

Layout.Main = styled.div`
  // margin: 0 auto;
  // margin-top: 1.5rem;
  width: 100vw;
  transition: all .3s;
  position: relative;
  font-family: 'NanumSquare';
  

  ${media.tablet`
    margin-top: 1rem;
    width: calc(100% - 2rem);
  `}

  ${media.mobile`
    margin-top: 0.5rem;
    width: calc(100% - 1rem);        
  `}

  @font-face {
    font-family: "NanumSqure";
    src: url("../../public/font/NanumSquareR.ttf") format("truetype");
  }

  }
`;

export default Layout;
