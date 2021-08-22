import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from 'lib/style-utils';
import axios from 'axios';

import { SearchBar, SearchResult } from 'components/Search'
import Button from 'components/Shared/Button';

const Wrapper = styled.div`
    font-weight: 300;
    font-size: 1.2rem;
    display: flex;
    height: 90vh;
    font-family: 'NanumSquare';
`;

const baseURL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=a1a1667b8cd272963b692744ef10a2d2&itemPerPage=100';


function Search() {

    const [filter, setFilter] = useState({
        name: ''
    });

    const [result, setResult] = useState();


    const handleFilterTextChange = (target) => {
        
        setFilter({
            ...filter,
            name: target
        })
    };

    const handleSearchClick = () => {

        let URL = baseURL;

        if (filter.name !== '') {
            URL = URL + '&movieNm=' + filter.name;

            axios.get(URL)
                .then((res) => {
                    setResult(res.data.movieListResult);
                })
                .catch((err) => {
                    console.log(err);
                })
        }











    }


    return (
        <Wrapper>
            <SearchBar onFilterTextChange={handleFilterTextChange} onHandleSearchClick={handleSearchClick} />



            <SearchResult result={result} />
        </Wrapper>


    );
}

export default Search;