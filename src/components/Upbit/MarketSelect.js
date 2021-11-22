import styled from 'styled-components';


const MarketSelectWrapper = styled.div`
  
  display: flex;
  flex-direction: row; 
  min-height: 3vh;
  border-bottom: 0.5px solid gray;
`;

const MarketName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1% 0 1% 0;
  width: 20%;
`;


const MarketSelect = () => {

    return (
        <MarketSelectWrapper>
            <MarketName>
                원화
            </MarketName>
            <MarketName>
                BTC
            </MarketName>
            <MarketName>
                USDT
            </MarketName>
            <MarketName>
                보유
            </MarketName>
            <MarketName>
                관심
            </MarketName>

        </MarketSelectWrapper>
    )

}

export default MarketSelect;