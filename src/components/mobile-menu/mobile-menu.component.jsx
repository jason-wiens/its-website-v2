import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { MENU_ITEMS } from './menu-items'
import MenuItem from './menu-item.component'

import logo from '../../assets/logo/logo - blue-orange.svg'

import { selectMobileHidden } from '../../redux/mobile-menu/mobile-menu.selector'

import './mobile-menu.styles.scss'


const MobileMenu = ({ hidden }) => (
  <div className='menu-container'>
    <div className={`menu-left ${hidden ? '' : 'toggle'}`}>
      <img src={logo} alt='Logo' />
      <div className='info-container'>
        <span>Integrity Technology Solutions</span>
        <a href='mailto:kcarroll@integrity-tech.ca'>Email: kcarroll@integrity-tech.ca</a>
        <a href='tel:4036129357'>Phone: 403-612-9357</a>
      </div>
    </div>
    <div className={`menu-right ${hidden ? '' : 'toggle'}`}>
      <ul className='menu'>
        {
          MENU_ITEMS.map(item => (
            <MenuItem key={item.id} {...item} />
          ))
        }
      </ul>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  hidden: selectMobileHidden
})

export default connect(mapStateToProps)(MobileMenu)