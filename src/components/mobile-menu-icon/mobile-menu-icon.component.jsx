import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMobileHidden } from '../../redux/mobile-menu/mobile-menu.selector'
import { selectBarsColor } from '../../redux/element-props/element-props.selector'
import { toggleMobileMenu } from '../../redux/mobile-menu/mobile-menu.actions'

import './mobile-menu-icon.styles.scss'

const MobileMenuIcon = ({ hidden, toggleMobileMenu, color }) => (
  <div 
    className={`${ hidden ? '' : 'open '}mobile-menu-icon`}
    onClick={toggleMobileMenu}
  >
    <span className={`hamburger ${color}`} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  hidden: selectMobileHidden,
  color: selectBarsColor
})

const mapDispatchToProps = dispatch => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuIcon)