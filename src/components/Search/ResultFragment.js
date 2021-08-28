import styled from 'styled-components';
import oc from 'open-color';
import { useEffect } from 'react';

const StyledResultFragment = styled.div`
    width: 17.5%;
    height: 29.5%;
    margin: 1%;

    background: white;
    color: ${oc.gray[6]};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    object-fit: fill;

    cursor: pointer;

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
`;

const MovieImg = styled.img`
object-fit: cover;
}

`;



function ResultFragment(props) {

    const movie = props.movie;
    console.log(movie);

    useEffect(() => {





    }, [])

    return (
        <StyledResultFragment>
            <MovieImg src={movie.image} alt={movie.title} titlt={movie.title}></MovieImg>
        </StyledResultFragment>
    );










}


export default ResultFragment;