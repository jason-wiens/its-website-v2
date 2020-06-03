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

  const ratio = width / height
  let src = video820x420

  if(ratio < 1) {
    src = (width > 600) ? video810x1080 : video420x820
  } else {
    if (width > 1800) { src = video1920x1080 } else
    if (width > 1200) { src = video1440x1080 } else
    if (width > 900) { src = video1080x810 }
  }


  return (
    <section className='banner'>
      <div className='banner-video'>
        <video autoPlay playsInline loop id="header-video">
          <source id="video-mp4" src={src} type="video/mp4" />
        </video>
        <div className='banner-text'>
          <h1 className='title'>INTEGRITY TECHNOLOGY SOLUTIONS</h1>
          <h2 className='slogan'>Developing Trust Through Technology</h2>
        </div>
      </div>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
    setLogoColor: logoColor => dispatch(setLogoColor(logoColor))
})

export default connect(null, mapDispatchToProps)(Banner)