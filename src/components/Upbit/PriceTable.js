import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import { w3cwebsocket } from "websocket";

const PriceTableWrapper = styled.div`
  min-height: 80vh;
`;


const PriceTable = () => {

    const [price, setPrice] = useState();

    let client;

    useEffect(() => {

        client = new w3cwebsocket("wss://api.upbit.com/websocket/v1");
        client.binaryType = "arraybuffer";

        client.onopen = () => {
            onOpen();
        }

        client.onmessage = (e) => {
            onMessage(e);
        }

    }, []);

    const onOpen = () => {
        const msg = JSON.stringify([


            { "ticket": "TEST" }, { "type": "ticker", "codes": ["KRW-BTC", "KRW-ETH", "KRW-BCH", "KRW-ETC"] }


        ]);
        doSend(msg);
    };

    const doSend = (msg) => {
        client.send(msg);
    }

    const onMessage = (e) => {

        const enc = new TextDecoder("utf-8");
        const arr = new Uint8Array(e.data);
        const priceData = JSON.parse(enc.decode(arr));

        console.log(priceData);


        // const priceInfo = {
        //   openingPrice: priceData.opening_price,
        //   prevClosingPrice: priceData.prev_closing_price,

        //   lowPrice: priceData.low_price,
        //   highPrice: priceData.high_price,

        //   tradePrice: priceData.trade_price,
        //   change: priceData.change     
        // }


        // const data = useMemo(
        //     () => [
        //         {
        //             col1: 'Hello',
        //             col2: 'World',
        //         },
        //         {
        //             col1: 'react-table',
        //             col2: 'rocks',
        //         },
        //         {
        //             col1: 'whatever',
        //             col2: 'you want',
        //         },
        //     ],
        //     []
        // );

        const getName = (name) => {
            switch (name) {
                case 'KRW-BTC':
                    return '비트코인'
                case 'KRW-ETH':
                    return '이더리움'
                case 'KRW-BCH':
                    return '비트코인캐시'
                case 'KRW-BTC':
                    return '이더리움클래식'
                default:
                    break;
            }
        }

        // const columns = useMemo(
        //     () => [


        //         {
        //             Header: '한글명',
        //             accessor: 'code'
        //         },
        //         {
        //             Header: '현재가',
        //             accessor: 'tradePrice',
        //         },
        //         {
        //             Header: '전일대비',
        //             accessor: 'signedChangeRate',
        //         },
        //         {
        //             Header: '거래대금',
        //             accessor: 'tradeVolume',
        //         },
        //     ],
        //     []
        // );

         const rows = [
            {
                code: 'Hello',
                tradePrice: 'World',
                signedChangeRate: 'dfdfd',
                tradeVolume: ''
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            }
         ];
         
       


        // const tableInstance = useTable({ columns, data })



        //const price = priceData.trade_price;


        // setPrice(price);


    }

    return (
        <PriceTableWrapper>dfdf</PriceTableWrapper>
    )

}

export default PriceTable;