const login = currentUser => {
  return { type: 'USER_LOGIN', payload: currentUser }
}

const signUp = currentUser => {
  return { type: 'USER_SIGN_UP', payload: currentUser }
}

const completeProfile = signedUpUser => {
  return { type: 'COMPLETE_PROFILE', payload: signedUpUser }
}

export default {
  login,
  signUp,
  completeProfile
}
