import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Waypoint } from 'react-waypoint'

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

  return (
    <section className='banner'>
      <div className='banner-video'>
        <video autoPlay playsInline muted loop id="header-video" key={src}>
          <source id="video-mp4" src={src} type="video/mp4" />
        </video>
        <div className='banner-text'>
          <h1 className='title'>INTEGRITY TECHNOLOGY SOLUTIONS</h1>
          <h2 className='slogan'>Developing Trust Through Technology</h2>
        </div>
      </div>
      <Waypoint 
        scrollableAncestor={window}
        bottomOffset='0px' 
        onEnter={() => {setLogoColor('white-orange')}} 
        onLeave={() => {setLogoColor('blue-orange')}} 
      />
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
    setLogoColor: logoColor => dispatch(setLogoColor(logoColor))
})

export default connect(null, mapDispatchToProps)(Banner)