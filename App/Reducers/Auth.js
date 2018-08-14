const authInitialState = {
  // User Accounts
  userAccounts: [
    {
      firstName: 'Milan',
      lastName: 'Maheshwari',
      username: 'milan@98',
      phone: '+91 9418845678',
      email: 'milanmundra98@gmail.com',
      password: 'password'
    },
    {
      firstName: 'Pritish',
      lastName: 'Vaidya',
      username: 'pritish@94',
      phone: '+91 9882224516',
      email: 'pritishvaidya94@gmail.com',
      password: 'password'
    },
    {
      firstName: 'Mitesh',
      lastName: 'Shah',
      username: 'mitesh@96',
      phone: '+91 9111111111',
      email: 'milanmundra98@gmail.com',
      password: 'password'
    },
    {
      firstName: 'Demo',
      lastName: 'User',
      username: 'demoUser@19',
      phone: '+91 9881111111',
      email: 'demo.user@test.com',
      password: 'password'
    }
  ],

  // Information
  currentUser: [],
  isLoggedIn: false
}

export default function reducer(state = authInitialState, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      return { ...state, currentUser: action.payload, isLoggedIn: true }
    }
    case 'USER_SIGN_UP': {
      return { ...state, currentUser: action.payload, isLoggedIn: true }
    }
    case 'COMPLETE_PROFILE': {
      const currentUser = [{ ...state.currentUser[0], ...action.payload[0] }]
      return {
        ...state,
        isLoggedIn: true,
        currentUser: currentUser,
        userAccounts: state.userAccounts.concat(currentUser)
      }
    }
    default:
      return state
  }
}
