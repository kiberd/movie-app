// reducers/userTicket.js
import produce from "immer";
import {
  GET_MOVIE_INFO_REQUEST,
  GET_MOVIE_INFO_SUCCESS,
  GET_MOVIE_INFO_FAILURE
} from "../constants/actionTypes";

export const getMovieInfo = (params) => ({
  type: GET_MOVIE_INFO_REQUEST,
  /** 중요! - 이 params은 saga의
  const result = yield call(getUserTicketApi, action.params);
  여기의 params로 들어갑니다. */
  params
});

// export const setTicket = ticket => ({ type: SET_TICKET, ticket });

const initalState = {
  movieInfo: [],
  loading: false
};

const movieInfo = (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MOVIE_INFO_REQUEST:
        draft.loading = true;
        break;

      // 요기가 saga에 의해 실행된다.
      case GET_MOVIE_INFO_SUCCESS:
        draft.movieInfo = action.data;
        draft.loading = false;
        break;
      case GET_MOVIE_INFO_FAILURE:
        draft.loading = false;
        break;
      default:
        return state;
    }
  });

export default movieInfo;