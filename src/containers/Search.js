import React, { useState } from 'react';
import styled from 'styled-components';
import { media, MainWrapper } from 'lib/style-utils';
import axios from 'axios';


import { SearchBar, SearchResult } from 'components/Search'
import Button from 'components/Shared/Button';


const Wrapper = styled.div`
    font-weight: 300;
    font-size: 1.2rem;
    display: flex;
    height: 95vh;
    font-family: 'NanumSquare';
`;

const baseURL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=a1a1667b8cd272963b692744ef10a2d2&itemPerPage=100';


function Search() {

    const [title, setTitle] = useState('');
    const [filter, setFilter] = useState();

    const [result, setResult] = useState();


    const handleTitleChange = (target) => {
        console.log(target);
        setTitle(target);
    };

    const handleSearchClick = () => {

        if (title === '') {
            alert('검색어를 입력해주세요!')
        }
        else {
            getSearchMovie();
        }
    };

    async function getSearchMovie(filter) {
        try {
            const { data: { items } } = await axios.get('/v1/search/movie.json',
                {
                    params:
                    {
                        query: title,
                        display: 100
                    },
                    headers:
                    {
                        'X-Naver-Client-Id': 'WTMWv8BhCZ6X8sY1VLdE',
                        'X-Naver-Client-Secret': 'rIgKTA9THU'
                    }
                });
            
                console.log(items);
                setResult(items);
        }
        catch (e) {
            console.log(e);
        }



    }









    return (
        <MainWrapper>

            <SearchBar onHandleTitleChange={handleTitleChange} onHandleSearchClick={handleSearchClick} />



            <SearchResult result={result} />

        </MainWrapper>

    );
}

export default Search;