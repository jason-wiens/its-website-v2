import { createSelector } from 'reselect';

const selectMobileMenu = state => state.mobileMenu

export const selectMobileHidden = createSelector(
  [selectMobileMenu],
  selectMobileMenu => selectMobileMenu.hidden
)