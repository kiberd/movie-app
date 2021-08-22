import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/style-utils';

import Input from 'components/Shared/Input';
import Button from 'components/Shared/Button';



const StyledSearchFilter = styled.div`

height: 50%;
justify-content: center;
border: 1px solid;
align-items: center;
margin: 3%;
   
`;



function SearchFilter() {

    return (
        <StyledSearchFilter>안녕하세요</StyledSearchFilter>

    );
}


export default SearchFilter;