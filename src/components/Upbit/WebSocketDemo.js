import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const WebSocketDemo = () => {
  // This can also be an async getter function. See notes below on Async Urls.
  const socketUrl = "wss://api.upbit.com/websocket/v1";

  const {
    sendMessage,
    lastMessage,
    readyState,
    getWebSocket
  } = useWebSocket(socketUrl, {
    
    onOpen: () => {
      console.log(getWebSocket().binaryType);
      // sendMessage( JSON.stringify( [{"ticket"	: "TEST"},{ "type"		: "ticker", "codes"		: ["KRW-BTC"]}]) )
    },
    
    onMessage: (e) => {
      console.log(getWebSocket().binaryType);
      // console.log(e);
    },

    share: true 
  
  });
  
  useEffect(() => {

    if(getWebSocket()){
      getWebSocket.binaryType = 'arraybuffer';
      getWebSocket().send(JSON.stringify( [{"ticket"	: "TEST"},{ "type"		: "ticker", "codes"		: ["KRW-BTC"]}]))
    }

    
    
  }, []);

  return <div>ddd</div>;
};

export default WebSocketDemo;
