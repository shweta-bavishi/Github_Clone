import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "../Actions/userDetails.js";

const initialState = {
  users: { id: 1 },
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload.id
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: null
      };
    default:
      return state;
  }
}
