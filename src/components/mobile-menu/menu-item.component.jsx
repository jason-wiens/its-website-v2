import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { toggleMobileMenu } from '../../redux/mobile-menu/mobile-menu.actions'

import './mobile-menu.styles.scss'

const MenuItem = ({ url, displayName, history, toggleMobileMenu }) => (
  <li className='menu-item' onClick={() => {
    history.push(url);
    toggleMobileMenu();
  }}>{displayName}</li>
)

const mapDispatchToProps = dispatch => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu())
})

export default withRouter(connect(null, mapDispatchToProps)(MenuItem))
