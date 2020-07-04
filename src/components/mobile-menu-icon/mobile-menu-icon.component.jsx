import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMobileHidden } from '../../redux/mobile-menu/mobile-menu.selector'
import { selectBarsColor, selectSectionTitleText } from '../../redux/element-props/element-props.selector'
import { toggleMobileMenu } from '../../redux/mobile-menu/mobile-menu.actions'
import { setSectionTitleText } from '../../redux/element-props/element-props.actions'

import './mobile-menu-icon.styles.scss'


const MobileMenuIcon = ({ hidden, toggleMobileMenu, color, currentSection, setSectionTitleText }) => {

  const [previousSection, setPreviousSection] = useState('')

  const toggleMenu = () => {
    if (hidden) {
      setPreviousSection(currentSection)
      setSectionTitleText('Menu')
    } else {
      setSectionTitleText(previousSection)
    }
    toggleMobileMenu(!hidden)
  }
  
  return (
    <div 
      className={`${ hidden ? '' : 'open '}mobile-menu-icon`}
      onClick={toggleMenu}
    >
      <span className={`hamburger ${color}`} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectMobileHidden,
  color: selectBarsColor,
  currentSection: selectSectionTitleText
})

const mapDispatchToProps = dispatch => ({
  toggleMobileMenu: () => dispatch(toggleMobileMenu()),
  setSectionTitleText: text => dispatch(setSectionTitleText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuIcon)