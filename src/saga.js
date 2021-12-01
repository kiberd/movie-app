







const connectCandleSocketSaga = createConnectSocketSaga(
    CONNECT_CANDLE_SOCKET,
    "ticker",
    candleDataUtils.updates
  );


// 시작시 데이터 초기화 작업들
const startInit = () => ({ type: START_INIT });
function* startInittSaga() {
  yield getMarketNameSaga(); // 코인/시장 종류 받기

  const state = yield select();
  const marketNames = Object.keys(state.Coin.marketNames.data);
  const selectedMarket = state.Coin.selectedMarket;
  const selectedTimeType = state.Coin.selectedTimeType;
  const selectedTimeCount = state.Coin.selectedTimeCount;

  yield getInitCandleSaga({ payload: marketNames }); // 코인 캔들 초기값 받기
  yield getInitOrderbookSaga({ payload: selectedMarket }); // 호가창 초기값 받기
  yield getOneCoinTradeListsSaga({ payload: selectedMarket }); // 체결내역 초기값 받기
  yield getOneCoinCandlesSaga({
    payload: {
      coin: selectedMarket,
      timeType: selectedTimeType,
      timeCount: selectedTimeCount,
    },
  }); // 200개 코인 데이터 받기

  // yield connectCandleSocketSaga({ payload: marketNames }); // 캔들 소켓 연결 사가버전
  yield put(connectOrderbookSocketThunk({ payload: marketNames })); // 오더북 소켓 연결
  yield put(connectTradeListSocketThunk({ payload: marketNames })); // 체결내역 소켓 연결
  // yield put(connectCandleSocketThunk({ payload: marketNames })); // 캔들 소켓 연결
  yield connectCandleSocketSaga({ payload: marketNames }); // 캔들 소켓 연결 사가버전
}








// 소켓 만들기
const createSocket = () => {
    const client = new W3CWebSocket("wss://api.upbit.com/websocket/v1");
    client.binaryType = "arraybuffer";
  
    return client;
  };
  
  // 소켓 연결용
  const connectSocekt = (socket, connectType, action, buffer) => {
    return eventChannel((emit) => {
      socket.onopen = () => {
        socket.send(
          JSON.stringify([
            { ticket: "downbit-clone" },
            { type: connectType, codes: action.payload },
          ])
        );
      };
  
      socket.onmessage = (evt) => {
        const enc = new encoding.TextDecoder("utf-8");
        // const arr = new Uint8Array(evt.data);
        const data = JSON.parse(enc.decode(evt.data));
  
        emit(data);
      };
  
      socket.onerror = (evt) => {
        emit(evt);
        emit(END);
      };
  
      const unsubscribe = () => {
        socket.close();
      };
  
      return unsubscribe;
    }, buffer || buffers.none());
  };
  
  // 웹소켓 연결용 사가
  const createConnectSocketSaga = (type, connectType, dataMaker) => {
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;
  
    return function* (action = {}) {
      const client = yield call(createSocket);
      const clientChannel = yield call(
        connectSocekt,
        client,
        connectType,
        action,
        buffers.expanding(500)
      );
  
      try {
        while (true) {
          const datas = yield flush(clientChannel); // 버퍼 데이터 가져오기
          const state = yield select();
  
          if (datas.length) {
            const sortedObj = {};
            datas.forEach((data) => {
              if (sortedObj[data.code]) {
                // 버퍼에 있는 데이터중 시간이 가장 최근인 데이터만 남김
                sortedObj[data.code] =
                  sortedObj[data.code].timestamp > data.timestamp
                    ? sortedObj[data.code]
                    : data;
              } else {
                sortedObj[data.code] = data; // 새로운 데이터면 그냥 넣음
              }
            });
  
            const sortedData = Object.keys(sortedObj).map(
              (data) => sortedObj[data]
            );
  
            yield put({ type: SUCCESS, payload: dataMaker(sortedData, state) });
          }
          yield delay(500); // 500ms 동안 대기
        }
      } catch (e) {
        yield put({ type: ERROR, payload: e });
      } finally {
        clientChannel.close(); // emit(END) 접근시 소켓 닫기
      }
    };
  };