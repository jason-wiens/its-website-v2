import { ElementPropsActionTypes } from './element-props.types'

const INITIAL_STATE = {
  logo: {
    color: 'white-orange' // options: blue-orange, blue-white, white-orange, white
  },
  sectionTitle: {
    text: '01 - Introduction',
    color: 'orange' // options: blue, orange, white
  },
  bars: {
    color: 'orange' // options: blue, orange, white
  },
  social: {
    color: 'orange' // options: blue, orange, white
  }
}

const ElementPropsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ElementPropsActionTypes.SET_LOGO_COLOR:
      return {
        ...state,
        logo: {
          color: action.payload
        }
      }
    case ElementPropsActionTypes.SET_SECTIONTITLE_COLOR:
      return {
        ...state,
        sectionTitle: {
          color: action.payload,
          text: state.sectionTitle.text
        }
      }
    case ElementPropsActionTypes.SET_SECTIONTITLE_TEXT:
      return {
        ...state,
        sectionTitle: {
          color: state.sectionTitle.color,
          text: action.payload
        }
      }
    case ElementPropsActionTypes.SET_BARS_COLOR:
      return {
        ...state,
        bars: {
          color: action.payload
        }
      }
    case ElementPropsActionTypes.SET_SOCIAL_COLOR:
      return {
        ...state,
        social: {
          color: action.payload
        }
      }
    default:
      return state
  }
}

export default ElementPropsReducer