import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useSpring, animated, useTrail, useChain } from 'react-spring'
import Particles from 'react-particles-js'

import { MENU_ITEMS } from './menu-items'
import MenuItem from './menu-item.component'

import logo from '../../assets/logo/logo - blue-orange.svg'

import { selectMobileHidden } from '../../redux/mobile-menu/mobile-menu.selector'

import './mobile-menu.styles.scss'


const MobileMenu = ({ hidden }) => {

  const configFast = { mass: 5, tension: 2000, friction: 200 }
  const configSlow = { mass: 1, tension: 280, friction: 60 }
  const configRegular = {mass: 1, tension: 170, friction: 26 }

  const leftPanelTransition = useRef()
  const leftPanel = useSpring({
    ref: leftPanelTransition,
    config: configFast,
    from: {
      transform: 'translate3d(-100%,0,0)',
      opacity: 0
    },
    to: {
      transform: hidden ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)',
      opacity: hidden ? 0 : 1
    }
  })

  const rightPanelTransition = useRef()
  const rightPanel = useSpring({
    ref: rightPanelTransition,
    config: configFast,
    from: {
      transform: 'translate3d(100%,0,0)',
      opacity: 0
    },
    to: {
      transform: hidden ? 'translate3d(100%,0,0)' : 'translate3d(0%,0,0)',
      opacity: hidden ? 0 : 1
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

  useChain(hidden ? [menuItemsTransition, rightPanelTransition] : [rightPanelTransition, menuItemsTransition], [0, hidden ? 0.6 : 0.1 ])
  useChain(hidden ? [leftPanelTransition] : [leftPanelTransition])
  
  return (
    <div className='menu-container'>
      <animated.div className='menu-left' style={leftPanel}>
        <div className='particles-container'>
          <Particles
            height='100vh'
            width='100%'
            params={{
              "particles": {
                  "number": {
                      "value": 200
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

export default connect(mapStateToProps)(MobileMenu)

// params={{
//   "particles": {
//     "number": {
//       "value": 400
//     },
//     "color": {
//       "value": '#f56d23'
//     }
//   }
// }}