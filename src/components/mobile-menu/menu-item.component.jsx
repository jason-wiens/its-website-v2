import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { animated } from 'react-spring'

import { toggleMobileMenu } from '../../redux/mobile-menu/mobile-menu.actions'

import './mobile-menu.styles.scss'

const MenuItem = ({ url, displayName, history, toggleMobileMenu, animation }) => (
  <animated.li 
    className='menu-item' 
    style={ animation }
    onClick={() => {
      history.push(url);
      toggleMobileMenu();
    }}
  >
    {displayName}
    <div className='underline' />
  </animated.li>
)

const mapDispatchToProps = dispatch => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu())
})

export default withRouter(connect(null, mapDispatchToProps)(MenuItem))
