import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from 'react-spring'

import './big-title.styles.scss'

const BigTitle = ({ title, side, offset }) => {
  const [on, toggle] = useState(false)

  let animationOptions = {}

  if(side === 'left') {
    animationOptions = {
      transform: on 
      ? `translate3d(${offset * -1}%,0,0)` 
      : `translate3d(-100%,0,0)` 
    }
  } else {
    animationOptions = {
      textAlign: 'right',
      transform: on 
      ? `translate3d(${offset}%,0,0)` 
      : `translate3d(100%,0,0)` 
    }
  }

  const animation = useSpring(animationOptions)

  return (
    <div>
      <Waypoint
        scrollableAncestor={window}
        bottomOffset="10%"
        topOffset='-90%' 
        onEnter={() => {if(!on) toggle(true)}} 
        onLeave={() => {if(on) toggle(false)}} 
      />
        
      <animated.h1 className="big-title" style={animation}>{title}</animated.h1>
    </div>
  )
}

export default BigTitle
