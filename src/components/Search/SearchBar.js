import styled from 'styled-components';
import oc from 'open-color';
import { media } from 'lib/style-utils';

import Input from 'components/Shared/Input';
import Button from 'components/Shared/Button';
import SearchFilter from './SearchFilter';



const StyledSearchBar = styled.div`
    width: 15%;
    border-right: 1px solid;
    display: flex;
    flex-direction: column;
    ${media.tablet`
       display: none;
    `}
`;





function SearchBar(props) {

    const handleTitleChange = (e) => {
        props.onHandleTitleChange(e.target.value);
    }

    const handleSearchClick = () => {
        
        props.onHandleSearchClick();
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            props.onHandleSearchClick();
        }   
    }



    return (
        <StyledSearchBar>

            <Input search plcaeholer='search' onChange={handleTitleChange} onKeyPress={onKeyPress}></Input>
            <Button search primary onClick={handleSearchClick}>검색</Button>
            <SearchFilter></SearchFilter>
            
        </StyledSearchBar>
        
          
       
    );
}


export default SearchBar;