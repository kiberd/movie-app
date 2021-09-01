import styled from "styled-components";
import oc from "open-color";
import { media } from "lib/style-utils";
import { useEffect, useState, useMemo } from "react";

import ResultFragment from "./ResultFragment";
import { map } from "react-immutable-proptypes";
import Modal from "styled-react-modal";

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

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bgColor};
`;

function SearchResult(props) {
  const result = props.result;

  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState();

  const toggleModal = (movie) => {
    setIsOpen(!isOpen);
    console.log(movie);
    setMovie(movie);
  };

  // const result = useMemo(() => props.result, [props.result]);

  // console.log(result);
  return (
    <StyledSearchResult>
      {result
        ? result.map((movie, index) => (
            <ResultFragment
              movie={movie}
              key={index}
              onClick={() => toggleModal(movie)}
            ></ResultFragment>
          ))
        : null}

      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        {movie ? (
          <>
            <span>{movie.title}</span>
            <span>{movie.subtitle}</span>
          </>
        ) : null}

        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </StyledSearchResult>
  );
}

export default SearchResult;
