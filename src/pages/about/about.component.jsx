// import React from 'react'

// import './about.styles.scss'

// const AboutPage = () => (
//   <div className='about-page'>
//     <span className='placeholder'>About</span>
//   </div>
// )

// export default AboutPage

// import React, { useRef } from 'react'
// import { useInView } from 'react-intersection-observer'

// import './about.styles.scss'

// const AboutPage = () => {
//   const [ref, inView, entry] = useInView({
//     /* Optional options */
//     threshold: 0,
//   })

//   return (
//     <div>
//       <div className='test-head' ref={ref}>Header</div>
//       <h2 className='test'>{`Header inside viewport ${inView}.`}</h2>
//       <div className='spacer'></div>
//     </div>
//   )
// }

// export default AboutPage

import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

const AboutPage = () => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  })
  const props = useSpring({ opacity: inView ? 1 : 0 })
  return (
    <div>
      <div className='spacer'></div>
      <animated.div ref={ref} style={props}>
        <span>Hello</span>
      </animated.div>
      
    </div>
  )
}

export default AboutPage
