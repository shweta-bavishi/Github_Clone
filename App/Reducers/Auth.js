const authInitialState = {
  // Information
  currentUser: [],
  isLoggedIn: false
};

export default function reducer(state = authInitialState, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      return { ...state, currentUser: action.payload, isLoggedIn: true };
    }
    case "USER_SIGN_UP": {
      return { ...state, currentUser: action.payload, isLoggedIn: true };
    }
    case "COMPLETE_PROFILE": {
      const currentUser = [{ ...state.currentUser[0], ...action.payload[0] }];
      return {
        ...state,
        isLoggedIn: true,
        currentUser,
        userAccounts: state.userAccounts.concat(currentUser)
      };
    }
    default:
      return state;
  }
}
