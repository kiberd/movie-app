import React from 'react';
import { media, MainWrapper } from 'lib/style-utils';
import SeoulSVG from '../components/SeoulSVG'






function Dashboard() {


    const colors = {
        "종로구": 0.1,
        "중구": 0.3,
        "용산구": 0.25,
        "성동구": 0.7,
        "광진구": 0.27,
        "동대문구": 0.1,
        "중랑구": 0.47,
        "성북구": 0.63,
        "강북구": 0.37,
        "도봉구": 1,
        "노원구": 0.53,
        "은평구": 0.3,
        "서대문구": 0.21,
        "마포구": 0.67,
        "양천구": 0.21,
        "강서구": 0.16,
        "구로구": 0.48,
        "금천구": 0.21,
        "영등포구": 0.74,
        "동작구": 0.29,
        "관악구": 0.82,
        "서초구": 0.17,
        "강남구": 0.12,
        "송파구": 0.27,
        "강동구": 0.82
    }

    return (
        <MainWrapper>
           


           <SeoulSVG colors={colors}></SeoulSVG>



        </MainWrapper>

    );
}

export default Dashboard;