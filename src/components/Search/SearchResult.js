import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/style-utils';
import { useEffect, useState } from 'react';

import ResultFragment from './ResultFragment';
import { map } from 'react-immutable-proptypes';




const StyledSearchResult = styled.div`
    width: 85%;
    // background-color: blue;
    ${media.tablet`
    width: 100%;
`}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: auto;
`;

function SearchResult(props) {

    const result = props.result;
    return (

        <StyledSearchResult>

            {result ?
                result.movieList.map((movie) => (
                    <ResultFragment movie={movie}></ResultFragment>
                ))
                :
                null
            }


        </StyledSearchResult>



    );
}


export default SearchResult;