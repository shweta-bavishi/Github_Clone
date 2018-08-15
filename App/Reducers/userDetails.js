const initialState = {
  users: {},
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_BEGIN":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case "FETCH_USER_FAILURE":
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
