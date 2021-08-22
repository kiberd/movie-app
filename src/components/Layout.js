import React from "react";
import styled from "styled-components";
import {media} from 'lib/style-utils';

const Wrapper = styled.div`
  padding-top: 60px; /* 헤더 높이 */
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

Layout.Main = styled.div`
  margin: 0 auto;
  margin-top: 1.5rem;
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
