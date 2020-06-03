import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'

import './text-animation.styles.scss'

const TextAnimation = ({ size, text }) => {

  const [on, toggle] = useState(false)

  const animation = useSpring({
    config: config.molasses,
    opacity: on ? 1 : 0,
    // transform: on ? 'scale(1)' : 'scale(4)',
    // transformOrigin: 'left top'
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(0, 128px, 0)'
  })

  return (
    <div className={size}>
      <Waypoint 
        scrollableAncestor={window}
        bottomOffset="15%"
        topOffset='0%' 
        onEnter={() => {if(!on) toggle(true)}} 
        onLeave={(stuff) => {if(on) toggle(false); console.log(stuff)}} 
      >
        <animated.p className={`${size} text`} style={animation}>{text()}</animated.p>
      </Waypoint>
    </div>
  )
}

export default TextAnimation
