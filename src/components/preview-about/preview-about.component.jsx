import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated, config } from 'react-spring'
// import TextAnimation from '../text-animation/text-animation.component'

import './preview-about.styles.scss'

const PreviewAbout = () => {
  const [showText, toggleText] = useState(false)
  const textAnimation = useSpring({
    config: config.molasses,
    // transform: showText ? 'translate3d(0%,0%,0)' : 'translate3d(0%,-100%,0)',
    opacity: showText ? 1 : 0
  })
  
  
  return (
    <section className='preview-about'>

      <div className='about-text'>
        <Waypoint 
          scrollableAncestor={window}
          topOffset='-1000px'
          bottomOffset='40%' 
          onEnter={() => {
            toggleText(!showText)
          }} 
          onLeave={() => {
            toggleText(!showText)
          }} 
        />
        <animated.p style={textAnimation}>Integrity Technology Solutions (ITS) was founded to develop technology to encourage <span className='orange'>trust</span> for transactions in the Energy Industry. With decades of <span className='orange'>experience</span> in Oil & Gas Joint Venture and Vendor Audit, the founders of ITS recognize and understand first hand what the industry pain points are. Our mission is to educate, engineer and develop solutions specific to this niche. No other <span className='orange'>technology</span> provider understands the nuances of vendor and Joint Venture transactions better than ITS.</animated.p>
      </div>
    </section>
  )
}

export default PreviewAbout