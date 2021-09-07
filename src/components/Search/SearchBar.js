import React, { useState, useMemo } from "react";
import styled from "styled-components";
import oc from "open-color";
import { media } from "lib/style-utils";

import Input from "components/Shared/Input";
import {SearchButton} from "components/Shared/Button";
import SearchFilter from "./SearchFilter";

import { StylesProvider } from '@material-ui/core/styles';

const StyledSearchBar = styled.div`
  width: 15%;
  border-right: 1px solid;
  display: flex;
  flex-direction: column;
  ${media.tablet`
       display: none;
    `}
`;

const SearchBar = React.memo((props) => {
  // console.log("SearchBar render");

  const handleTitleChange = (e) => {
    props.onHandleTitleChange(e.target.value);
  };

  const handleSearchClick = () => {
    props.onHandleSearchClick();
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      props.onHandleSearchClick();
    }
  };

  return (

    <StyledSearchBar>
      <Input
        search
        plcaeholer="search"
        onChange={handleTitleChange}
        onKeyPress={onKeyPress}
      ></Input>

      <SearchButton onClick={handleSearchClick}>
        검색
      </SearchButton>

      <SearchFilter></SearchFilter>
    </StyledSearchBar>

  );
});

export default SearchBar;
