import { MobileMenuActionTypes } from './mobile-menu.types'

const INITIAL_STATE = {
  hidden: true
}

const MobileMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MobileMenuActionTypes.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default MobileMenuReducer