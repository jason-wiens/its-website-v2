import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Waypoint } from 'react-waypoint'
import { useSpring, useChain, animated } from 'react-spring'

import { setLogoColor } from '../../redux/element-props/element-props.actions'

import useWindowSize from '../../hooks/useWindowSize'

import video420x820 from '../../assets/video420x820.mp4'
import video810x1080 from '../../assets/video810x1080.mp4'
import video820x420 from '../../assets/video820x420.mp4'
import video1080x810 from '../../assets/video1080x810.mp4'
import video1440x1080 from '../../assets/video1440x1080.mp4'
import video1920x1080 from '../../assets/video1920x1080.mp4'

import './banner.styles.scss'

const Banner = ({ setLogoColor }) => {
  
  const { width, height } = useWindowSize()
  const [oldVideoSrc, changeOldVideoSrc] = useState(video1440x1080)
  const [showVideo, toggleVideo] = useState(false)

  let src = oldVideoSrc
  const changeVideoSrc = (newSrc) => {
    console.log('video change ', newSrc)
    src = newSrc
    changeOldVideoSrc(newSrc)
  }
  if(width / height < 1) {
    if (width > 600) {
      if (oldVideoSrc !== video810x1080) { changeVideoSrc(video810x1080) }
    } else {
      if (oldVideoSrc !== video420x820) { changeVideoSrc(video420x820) }
    }
  } else {
    if (width > 1800) { if (oldVideoSrc !== video1920x1080) { changeVideoSrc(video1920x1080) }  } else
    if (width > 1200) { if (oldVideoSrc !== video1440x1080) { changeVideoSrc(video1440x1080) } } else
    if (width > 900) { if (oldVideoSrc !== video1080x810) { changeVideoSrc(video1080x810) } } else
    { if (oldVideoSrc !== video820x420) { changeVideoSrc(video820x420) } }
  }

  const titleTransition = useRef()
  const title = useSpring({
    ref: titleTransition,
    from: {
      transform: 'translate3d(0, -100%, 0)'
    },
    to: {
      transform: 'translate3d(0, 0%, 0)'
    }
  })
  const subTitleTransition = useRef()
  const subTitle = useSpring({
    ref: subTitleTransition,
    from: {
      transform: 'translate3d(-100%, 0, 0)'
    },
    to: {
      transform: 'translate3d(0%, 0, 0)'
    }
  })
  useChain([{ current: titleTransition.current }, subTitleTransition], [0.5, 0.75])

  return (
    <section className='banner'>
      <div className={`banner-video ${showVideo ? '' : 'hide'}`}>
        <video autoPlay playsInline muted loop id="header-video" key={src}>
          <source id="video-mp4" src={src} type="video/mp4" />
        </video>
      </div>
      <div className='banner-text'>
        <Waypoint 
          scrollableAncestor={window}
          topOffset='0%' 
          onEnter={() => {
            setLogoColor('white-orange')
            toggleVideo(!showVideo)
          }} 
          onLeave={() => {
            setLogoColor('blue-orange')
            toggleVideo(!showVideo)
          }} 
        />
        <animated.h1 className={`title ${showVideo ? '' : 'hide'}`} style={title}>INTEGRITY TECHNOLOGY SOLUTIONS</animated.h1>
        <animated.h2 className='slogan' style={subTitle}>Developing Trust Through Technology</animated.h2>
      </div>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
    setLogoColor: logoColor => dispatch(setLogoColor(logoColor))
})

export default connect(null, mapDispatchToProps)(Banner)