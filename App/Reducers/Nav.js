import AppNavigation from '../Navigation/AppNavigation'

export default function(state, action) {
  const newState = AppNavigation.router.getStateForAction(action, state)

  return newState || state
}
