import React, { useEffect, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectSocialColor } from '../../redux/element-props/element-props.selector'

import './social.styles.scss'

const Social = ({ color }) => {

  const [iconClass, setIconClass] = useState('fa-2x')
  const windowSize = useWindowSize()
  let changeIconSize = (windowSize.width <= 800) ? 'small' : 'large'

  useEffect(() => {
    if (windowSize.width <= 800 ) {
      setIconClass('')
    } else {
      setIconClass('fa-2x')
    }
  }, [changeIconSize])
  
  return (
    <div className='social-container'>
      <i className={`${iconClass} ${color} fab fa-linkedin`}></i>
      <i className={`${iconClass} ${color} fab fa-facebook-square`}></i>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  color: selectSocialColor
})

export default connect(mapStateToProps)(Social)