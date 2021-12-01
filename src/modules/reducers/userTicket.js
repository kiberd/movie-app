// reducers/userTicket.js
import produce from "immer";
import {
  GET_USER_TICKET_REQUEST,
  GET_USER_TICKET_SUCCESS,
  GET_USER_TICKET_FAILURE
} from "../constants/actionTypes";

export const getUserTicket = params => ({
  type: GET_USER_TICKET_REQUEST,
  /** 중요! - 이 params은 saga의
  const result = yield call(getUserTicketApi, action.params);
  여기의 params로 들어갑니다. */
  params
});

// export const setTicket = ticket => ({ type: SET_TICKET, ticket });

const initalState = {
  userTicket: [],
  loading: false
};

const userTicket = (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER_TICKET_REQUEST:
        draft.loading = true;
        break;

      // 요기가 saga에 의해 실행된다.
      case GET_USER_TICKET_SUCCESS:
        draft.userTicket = action.data;
        draft.loading = false;
        break;
      case GET_USER_TICKET_FAILURE:
        draft.loading = false;
        break;
      default:
        return state;
    }
  });

export default userTicket;