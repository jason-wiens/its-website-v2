import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectLogoColor } from '../../redux/element-props/element-props.selector'

import logoWhite from '../../assets/logo/logo - white.svg'
import logoOrange from '../../assets/logo/logo - orange.svg'
import logoBlue from '../../assets/logo/logo - blue.svg'
import logoBlueOrange from '../../assets/logo/logo - blue-orange.svg'
import logoBlueWhite from '../../assets/logo/logo - blue-white.svg'
import logoWhiteOrange from '../../assets/logo/logo - white-orange.svg'

import './main-logo.styles.scss'

const MainLogo = ({ logoColor, history }) => {

  let src = logoBlueOrange

  switch (logoColor) {
    case 'blue-orange':
      src = logoBlueOrange
      break
    case 'blue-white':
      src = logoBlueWhite
      break
    case 'blue':
      src = logoBlue
      break
    case 'white-orange':
      src = logoWhiteOrange
      break
    case 'orange':
      src = logoOrange
      break
    case 'white':
      src = logoWhite
      break
    default:
      src = logoBlueOrange
  }
  
  return (
    <div className='main-logo'>
      <div className='logo-container' onClick={() => history.push('/')}>
        <img src={src} alt='Logo' />
      </div>
    </div>
  )
  }

const mapStateToProps = createStructuredSelector({
  logoColor: selectLogoColor
})

export default withRouter(connect(mapStateToProps)(MainLogo));