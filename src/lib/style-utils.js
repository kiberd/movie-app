import { css } from 'styled-components';
import styled from 'styled-components';


export const media = ({
    desktop: (...args) => css`
        @media (max-width: 1200px) {
            ${ css(...args) }
        }
    `,

    tablet: (...args) => css`
        @media (max-width: 992px) {
            ${ css(...args) }
        }
    `,

    mobile: (...args) => css`
        @media (max-width: 600px) {
            ${ css(...args) }
        }
    `
});

export const MainWrapper = styled.div`
font-weight: 300;
font-size: 1.2rem;
display: flex;
height: 95vh;
font-family: 'NanumSquare';
background: ${props => props.color || 'white'};
`;

export const dark ={
    colors:{
        titleColor : '#121212',
        bgColor: '#ffffff',
    }
}

export const light ={
    colors:{
        titleColor : '#ffffff',
        bgColor: ' #121212',
    }
}