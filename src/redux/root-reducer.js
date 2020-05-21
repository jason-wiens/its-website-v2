import { combineReducers } from 'redux'

import SectionReducer from './section/section.reducer'


const rootReducer = combineReducers({
  section: SectionReducer
})

export default rootReducer