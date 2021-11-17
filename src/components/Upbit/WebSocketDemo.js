import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { w3cwebsocket } from "websocket";


const WebSocketDemo = () => {

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
    const msg = JSON.stringify([{ "ticket": "TEST" }, { "type": "ticker", "codes": ["KRW-BTC"] }]);
    doSend(msg);
  };

  const doSend = (msg) => {
    client.send(msg);
  }

  const onMessage = (e) => {

    const enc = new TextDecoder("utf-8");
    const arr = new Uint8Array(e.data);
    const priceData = JSON.parse(enc.decode(arr)); 

    

    // const priceInfo = {
    //   openingPrice: priceData.opening_price,
    //   prevClosingPrice: priceData.prev_closing_price,

    //   lowPrice: priceData.low_price,
    //   highPrice: priceData.high_price,

    //   tradePrice: priceData.trade_price,
    //   change: priceData.change     
    // }

    const price = priceData.trade_price;

    
    setPrice(price);


  }

  return <div>{price}</div>;
};

export default WebSocketDemo;
