import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/style-utils';
import { useEffect, useState, useMemo } from 'react';

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

    // const result = useMemo(() => props.result, [props.result]);
    
    // console.log(result);






    return (

        <StyledSearchResult>

            {result ?
                result.map((movie, index) => (
                    <ResultFragment movie={movie} key={index}></ResultFragment>
                ))
                :
                null
            }


        </StyledSearchResult>



    );
}


export default SearchResult;