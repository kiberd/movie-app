// sagas/userTicket.js
import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
  GET_USER_TICKET_REQUEST,
  GET_USER_TICKET_SUCCESS,
  GET_USER_TICKET_FAILURE
} from "../constants/actionTypes";

import axios from "axios";

function getUserTicketApi(params) {
  return axios.get("/api/userTicket/", params);
}

function* getUserTicket(action) {
  try {
    // api 통신할때는 call
    const result = yield call(getUserTicketApi, action.params);

    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({ type: GET_USER_TICKET_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: GET_USER_TICKET_FAILURE, data: err.response.data });
  }
}

function* watchGetUserTickets() {
  yield takeLatest(GET_USER_TICKET_REQUEST, getUserTicket);
}

export default function* userTicketSaga() {
  yield all([fork(watchGetUserTickets)]);
}