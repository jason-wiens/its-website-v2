import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated, config } from 'react-spring'

import './image-animation.styles.scss'

const ImageAnimation = ({ img, swipeLeft }) => {
  const [on, toggle] = useState(false)

  const reveal = useSpring({
    config: config.molasses,
    transform: on 
      ? `translate3d(${swipeLeft ? '-100': '100'}%,0,0)` 
      : `translate3d(0%,0,0)`
  })

  const shrink = useSpring({
    config: config.slow,
    transform: on ? 'scale(1)' : 'scale(2)'
  })


  return (
    <div className='image-animation'>
      <Waypoint
        scrollableAncestor={window}
        bottomOffset="20%"
        topOffset="-1000%" 
        onEnter={() => {if(!on) toggle(true)}} 
        onLeave={() => {if(on) toggle(false)}} 
      />
      <animated.div className="image-cover" style={reveal}></animated.div>
      <animated.div className="image-container" style={shrink}>
        {img()}
      </animated.div>
    </div>
  )
}

export default ImageAnimation
