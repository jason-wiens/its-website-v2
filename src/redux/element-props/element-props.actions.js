import { ElementPropsActionTypes } from './element-props.types'

export const setLogoColor = color => ({
  type: ElementPropsActionTypes.SET_LOGO_COLOR,
  payload: color
})

export const setSectionTitleColor = color => ({
  type: ElementPropsActionTypes.SET_SECTIONTITLE_COLOR,
  payload: color
})

export const setSectionTitleText = text => ({
  type: ElementPropsActionTypes.SET_SECTIONTITLE_TEXT,
  payload: text
})

export const setBarsColor = color => ({
  type: ElementPropsActionTypes.SET_BARS_COLOR,
  payload: color
})

export const setSocialColor = color => ({
  type: ElementPropsActionTypes.SET_SOCIAL_COLOR,
  payload: color
})