import { combineReducers } from 'redux'

import MobileMenuReducer from './mobile-menu/mobile-menu.reducer'
import ElementPropsReducer from './element-props/element-props.reducer'


const rootReducer = combineReducers({
  mobileMenu: MobileMenuReducer,
  elementProps: ElementPropsReducer
})

export default rootReducer