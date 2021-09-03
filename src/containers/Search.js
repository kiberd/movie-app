import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { media, MainWrapper } from 'lib/style-utils';
import axios from 'axios';


import { SearchBar, SearchResult } from 'components/Search'
import Button from 'components/Shared/Button';
import { applyMiddleware } from 'redux';


const Wrapper = styled.div`
    font-weight: 300;
    font-size: 1.2rem;
    display: flex;
    height: 95vh;
    font-family: 'NanumSquare';
`;

const baseURL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=a1a1667b8cd272963b692744ef10a2d2&itemPerPage=100';


function Search() {

    console.log('Search render');

    const [title, setTitle] = useState('');
    const [filter, setFilter] = useState();
    const [result, setResult] = useState();


    const handleTitleChange = (target) => {
        const title = target;
        setTitle(title);
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

        let noBlankResult = [];
        let finalResult = [];

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

            // url 갖고 있지 않는 애들 제거
            items.map((item) => {
                if (item.image !== '') {
                    noBlankResult.push(item);
                }
            })

        }
        catch (e) {
            console.log(e);
            alert('네이버 영화 api를 조회할 수 없습니다.');
        }


        // 정상적으로 로드 된 이미지만 넣음
        try {
            await Promise.all(
                noBlankResult.map(async (item) => {
                    if (await addImageProcess(item.image)) {
                        finalResult.push(item);
                    }
                })
            );

        }
        catch (e) {
            console.log(e);
        }
        setResult(finalResult);

    }

    async function addImageProcess(src) {

        let img = new Image();
        img.src = src;
        try {

            let imgpromise = await onload2promise(img); // see comment of T S why you should do it this way.
            const ratio  = isNaN(imgpromise.naturalHeight / imgpromise.naturalWidth) ? 0 : (imgpromise.naturalHeight / imgpromise.naturalWidth).toFixed(1);
            
            if (ratio > 1.3) {
                return imgpromise;
            }

        }
        catch (e) {
            console.log(e);
        }

    }

    function onload2promise(obj) {
        return new Promise((resolve, reject) => {
            obj.onload = () => resolve(obj);
            obj.onerror = reject;
        });
    }










    return (
        <MainWrapper>

            <SearchBar onHandleTitleChange={handleTitleChange} onHandleSearchClick={handleSearchClick} />
            <SearchResult result={result} />

        </MainWrapper>

    );
}

export default Search;