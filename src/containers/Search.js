import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { media, MainWrapper } from 'lib/style-utils';
import axios from 'axios';

import { useSelector, useDispatch } from "react-redux";
import { getMovieInfo } from 'modules/reducers/movieInfo';


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


function Search() {

    const dispatch = useDispatch();
    const { movieInfo, loading } = useSelector(state => state.movieInfo);

    const [title, setTitle] = useState('');
    const [result, setResult] = useState();

    useEffect(() => {

        const movies = [];

        // URL 공백 제거
        movieInfo.map((movie) => {
            if (movie.image !== '') {
                movies.push(movie);
            }
        });

        // onLoad 되는 것만 filter
        filterOnLoadImg(movies);

    }, [movieInfo]);

    const filterOnLoadImg = async (movies) => {

        const onLoadList = [];

        await Promise.all(
            movies.map(async (movie) => {
                if (await addImageProcess(movie.image)) {
                    onLoadList.push(movie);
                }
            })
        );

        setResult(onLoadList);
    }

    const getSearchMovie = async () => {
        
        const params =
        {
            params: { query: title, display: 100 },
            headers: {
                'X-Naver-Client-Id': 'WTMWv8BhCZ6X8sY1VLdE',
                'X-Naver-Client-Secret': 'rIgKTA9THU'
            }
        }

        dispatch(getMovieInfo(params));
    }



    const addImageProcess = async (src) => {

        let img = new Image();
        img.src = src;

        const imgPromise = await onLoadPromise(img);
        const ratio = isNaN(imgPromise.naturalHeight / imgPromise.naturalWidth) ? 0 : (imgPromise.naturalHeight / imgPromise.naturalWidth).toFixed(1);

        if (ratio > 1.3) return imgPromise;

    }

    const onLoadPromise = (obj) => {
        return new Promise((resolve, reject) => {
            obj.onload = () => resolve(obj);
            obj.onerror = reject;
        });
    }

    const handleTitleChange = (target) => {
        const title = target;
        setTitle(title);
    };

    const handleSearchClick = () => {
        title === '' ? alert('검색어를 입력해주세요!') : getSearchMovie();
    };

    return (
        <MainWrapper>
            <SearchBar onHandleTitleChange={handleTitleChange} onHandleSearchClick={handleSearchClick} />
            <SearchResult result={result} />
        </MainWrapper>
    );
}

export default Search;