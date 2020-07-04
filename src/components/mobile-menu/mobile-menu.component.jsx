import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useSpring, animated, useTrail, useChain } from 'react-spring'
import Particles from 'react-particles-js'

import { setLogoColor } from '../../redux/element-props/element-props.actions'

import { selectMobileHidden } from '../../redux/mobile-menu/mobile-menu.selector'

import { MENU_ITEMS } from './menu-items'
import MenuItem from './menu-item.component'



import './mobile-menu.styles.scss'


const MobileMenu = ({ hidden, section, setLogoColor }) => {

  const configFast = { mass: 5, tension: 2000, friction: 200 }
  // const configSlow = { mass: 1, tension: 280, friction: 60 }
  // const configRegular = {mass: 1, tension: 170, friction: 26 }

  const leftPanelTransition = useRef()
  const leftPanel = useSpring({
    ref: leftPanelTransition,
    config: configFast,
    from: {
      transform: 'translate3d(-100%,0,0)',
      // opacity: 0
    },
    to: {
      transform: hidden ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)',
      // opacity: hidden ? 0 : 1
    }
  })

  const titleTransition = useRef()
  const title = useSpring({
    ref: titleTransition,
    from: {
      opacity: 0
    },
    to: {
      opacity: hidden ? 0 : 1
    }
  })

  const titleBarTransition = useRef()
  const titleBar = useSpring({
    ref: titleBarTransition,
    from: {
      transform: 'scale(0,0)'
    },
    to: {
      transform: hidden ? 'scale(0,0)' : 'scale(1,1)'
    }
  })

  const rightPanelTransition = useRef()
  const rightPanel = useSpring({
    ref: rightPanelTransition,
    config: configFast,
    from: {
      transform: 'translate3d(100%,0,0)',
      // opacity: 0
    },
    to: {
      transform: hidden ? 'translate3d(100%,0,0)' : 'translate3d(0%,0,0)',
      // opacity: hidden ? 0 : 1
    }
  })

  const menuItemsTransition = useRef()
  const menuItemTrail = useTrail(MENU_ITEMS.length, {
    ref: menuItemsTransition,
    config: configFast,
    from: {
      // opacity: 0,
      // transform: 'translate3d(0,-100%,0)'
    },
    to: {
      // opacity: hidden ? 0 : 1,
      // transform: hidden ? 'translate3d(0,-100%,0)' : 'translate3d(0,0%,0)'
      transform: hidden ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)'
    }
  })

  const transitionTime = 0.5
  useChain(
    [ { current: rightPanelTransition.current }, menuItemsTransition], 
    hidden ? [0,0] : [0, transitionTime]
  )
  useChain(
    [ { current: leftPanelTransition.current }, titleBarTransition, titleTransition],
    hidden ? [0,0,0] : [0, transitionTime, transitionTime])

  const windowWidth = window.innerWidth
  let numParticles = 0
  if (windowWidth > 2000) {
    numParticles = 200
  } else if (windowWidth > 1700) {
    numParticles = 150
  } else if (windowWidth > 1400) {
    numParticles = 120
  } else if (windowWidth > 1100) {
    numParticles = 80
  } else if (windowWidth > 800) {
    numParticles = 50
  }

  useEffect(() => {
    hidden ? setLogoColor('blue-orange') : setLogoColor('white-orange')
  }, [hidden])
  
  return (
    <div className='menu-container'>
      <animated.div className='menu-left' style={leftPanel}>
      { 
        hidden 
        ? <div />
        : <div className='particles-container'>
            <Particles
              height='100vh'
              width='100%'
              params={{
                "particles": {
                  "number": {
                    "value": numParticles
                  },
                  "size": {
                    "value": 2
                  },
                  "color": {
                    "value": "#f56d23"
                  },
                  "line_linked": {
                    "color": "#ffffff",
                    "opacity": 0.2
                  }
                },
                "interactivity": {
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    }
                  }
                }
              }}  
            />
          </div>
      }
        <div className="title-container">
          <animated.div className='title' style={title}>Integrity Technology Solutions</animated.div>
          <animated.div className="bar" style={titleBar}></animated.div>
        </div>
      </animated.div>
      <animated.div className='menu-right' style={rightPanel}>
        <ul className='menu'>
          {
            menuItemTrail.map((animation, index) => (
              <MenuItem key={MENU_ITEMS[index].id} animation={animation} {...MENU_ITEMS[index]} />
            ))
          }
        </ul>
      </animated.div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectMobileHidden
})

const mapDispatchToProps = dispatch => ({
  setLogoColor: logoColor => dispatch(setLogoColor(logoColor))
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu)