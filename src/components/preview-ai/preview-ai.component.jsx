import React from 'react'
import { connect } from 'react-redux'

import BigTitle from '../big-title/big-title.component'
import ImageAnimation from '../image-animation/image-animation.component'
import TextAnimation from '../text-animation/text-animation.component'

import { setSectionTitleText } from '../../redux/element-props/element-props.actions'

import './preview-ai.styles.scss'

import aiImgLrg from '../../assets/img/ai/ai1-1200.jpg'
import aiImgMed from '../../assets/img/ai/ai1-800.jpg'
import aiImgSml from '../../assets/img/ai/ai1-400.jpg'



const PreviewAi = () => {
  
  const img = () => (
    <img 
      srcset={`${aiImgLrg} 1200w,
              ${aiImgMed} 800w,
              ${aiImgSml} 400w`}
      sizes="(min-width: 600px) 100vw,
              60vw"       
      src={aiImgLrg} 
      alt="Robot typing at a keyboard"
    />
  )
  
  const text = () => (
    <span>Artificial Intelligence and Machine Learning is changing the way people do business. From the ground floor to the executive boardroom AI & ML will affect your job either by automating repetitive tasks or providing actionable insights from big data. Integrity (ITS) is building industry tools to address <span className='orange'>Joint Venture</span> and <span className='orange'>Vendor</span> pain points. We specialize in <span className='orange'>Computer Vision (CV)</span> and <span className='orange'>Natural Language Processing (NLP)</span> to read, understand and analyze transaction documents (Invoices, Tickets, PO’s, Backup, etc.).  Our tools are being used to improve AR and JV departments by increasing accuracy, broadening due diligence scopes, easing employee workloads and improving quality of life.</span>
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
            <ImageAnimation img={img} swipeLeft={true} /> 
          </div>
        </div>
        <div className="right">
          <div className="text-container">
            <TextAnimation size='regular' text={text} />
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