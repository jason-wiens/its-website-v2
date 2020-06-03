import React from 'react'

import MobileMenuIcon from '../mobile-menu-icon/mobile-menu-icon.component'
import Social from '../social/social.component'

import './side-bar-right.styles.scss'

const SideBarRight = () => (
  <div className='side-bar-right'>
    <MobileMenuIcon />
    <Social />
  </div>
)

export default SideBarRight