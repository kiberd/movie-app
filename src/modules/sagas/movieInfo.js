// sagas/userTicket.js
import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
  GET_MOVIE_INFO_REQUEST,
  GET_MOVIE_INFO_SUCCESS,
  GET_MOVIE_INFO_FAILURE
} from "../constants/actionTypes";

import axios from "axios";

function getMovieInfoApi(params) {
  
  return axios.get("/v1/search/movie.json", params);
}

function* getMovieInfo(action) {
  try {
    // api 통신할때는 call
    const result = yield call(getMovieInfoApi, action.params);

    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({ type: GET_MOVIE_INFO_SUCCESS, data: result.data.items });
  } catch (err) {
    yield put({ type: GET_MOVIE_INFO_FAILURE, data: err.response.data });
  }
}

function* watchGetMovieInfo() {
  yield takeLatest(GET_MOVIE_INFO_REQUEST, getMovieInfo);
}

export default function* userTicketSaga() {
  yield all([fork(watchGetMovieInfo)]);
}