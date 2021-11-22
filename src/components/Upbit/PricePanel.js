import styled from 'styled-components';

import PriceSearchInput from './PriceSearchInput';
import MarketSelect from './MarketSelect';
import PriceTable from './PriceTable';


const PricePanelWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column; 
  margin: 5% 20% 2% 2%;
`;



const PricePanel = () => {

    return (
        <PricePanelWrapper>
            <PriceSearchInput/>
            <MarketSelect/>
            <PriceTable/>
        </PricePanelWrapper>
    )

}

export default PricePanel;