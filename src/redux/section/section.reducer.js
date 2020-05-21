import { SectionActionTypes } from './section.types'

const INITIAL_STATE = {
  currentSection: 'Start'
}

const SectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SectionActionTypes.SET_CURRENT_SECTION:
      return {
        ...state,
        currentSection: action.payload
      }
    default:
      return state
  }
}

export default SectionReducer