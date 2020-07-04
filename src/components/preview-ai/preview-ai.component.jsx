import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Waypoint } from 'react-waypoint'
import { useSpring, useTrail, animated } from 'react-spring'

import BigTitle from '../big-title/big-title.component'
import ImageAnimation from '../image-animation/image-animation.component'
import TextAnimation from '../text-animation/text-animation.component'

import { setSectionTitleText } from '../../redux/element-props/element-props.actions'

import './preview-ai.styles.scss'

import aiImgLrg from '../../assets/img/ai/ai4-1200.jpg'
import aiImgMed from '../../assets/img/ai/ai4-800.jpg'
import aiImgSml from '../../assets/img/ai/ai4-400.jpg'


const PreviewAi = () => {
  
  const text = [
    <p><span className='large'>Artificial Intelligence and Machine Learning are accelerating the way people do business by automating repetitive tasks and by providing actionable insights from data.</span></p>,
    <p>Integrity (ITS) is building industry tools to address <span className='orange'>Joint Venture</span> and <span className='orange'>Vendor</span> pain points. We specialize in using <span className='orange'> Computer Vision (CV)</span> and <span className='orange'>Natural Language Processing (NLP)</span> to read, understand and analyze transaction documents (Invoices, Tickets, PO’s, Backup, etc.).</p>,
    <p>Our tools are being used to improve AR and JV departments by increasing accuracy, broadening due diligence scopes, easing employee workloads and improving quality of life.</p>
  ]
  const [showText, toggleText] = useState(false)
  const textAnimation = useTrail(text.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: showText ? 1 : 0,
    transform: showText ? 'translate3d(0%,0,0)' : 'translate3d(100%,0,0)'
  })
  
  const img1 = () => (
    <img 
      srcSet={`${aiImgLrg} 1200w,
              ${aiImgMed} 800w,
              ${aiImgSml} 400w`}
      sizes="(min-width: 600px) 100vw,
              60vw"       
      src={aiImgLrg} 
      alt="Robot typing at a keyboard"
    />
  )

  return (
    <div className='preview-ai'>
      
      <BigTitle 
        title='Artificial Intelligence'
        side='right'
        offset='5' />
      <div className="content">
        <div className="left">
          <div className="image-animation-container">
            <ImageAnimation img={img1} swipeLeft={true} /> 
          </div>
        </div>
        <div className="right">
          <Waypoint 
            scrollableAncestor={window}
            topOffset='-100000px'
            bottomOffset='40%'
            onEnter={() => { toggleText(!showText) }}
            onLeave={() => { toggleText(!showText) }}
          />
          <div className="text-container">
            {
              textAnimation.map((animation, index) => (
                <animated.div 
                  key={index}
                  style={animation}
                >
                  {text[index]}
                </animated.div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setSectionTitleText: title => dispatch(setSectionTitleText(title))
})

export default connect(null, mapDispatchToProps)(PreviewAi)

// <Waypoint
//         onEnter={() => setSectionTitleText('02 - Artificail Intelligence')} />