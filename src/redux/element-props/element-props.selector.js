import { createSelector } from 'reselect'

const selectElementProps = state => state.elementProps;

export const selectLogoColor = createSelector(
  [selectElementProps],
  selectElementProps => selectElementProps.logo.color
)

export const selectSectionTitleColor = createSelector(
  [selectElementProps],
  selectElementProps => selectElementProps.sectionTitle.color
)

export const selectSectionTitleText = createSelector(
  [selectElementProps],
  selectElementProps => selectElementProps.sectionTitle.text
)

export const selectBarsColor = createSelector(
  [selectElementProps],
  selectElementProps => selectElementProps.bars.color
)

export const selectSocialColor = createSelector(
  [selectElementProps],
  selectElementProps => selectElementProps.social.color
)