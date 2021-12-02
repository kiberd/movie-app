// sagas/index.js
import { all, fork } from "redux-saga/effects";

import movieInfo from "./movieInfo";

export default function* rootSaga() {
  yield all([fork(movieInfo)]);
}