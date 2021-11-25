import React from 'react';
import { MainWrapper } from 'lib/style-utils';

import Grid from '@mui/material/Grid';


import WebSocketDemo from '../components/Upbit/WebSocketDemo';

import PriceChart from 'components/Upbit/PriceChart'
import PricePanel from 'components/Upbit/PricePanel';

function Dashboard() {

    return (
        <MainWrapper color="gray">

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <PriceChart/>
                </Grid>
                <Grid item xs={4}>
                    <PricePanel />
                </Grid>
            </Grid>










        </MainWrapper>

    );
}

export default Dashboard;