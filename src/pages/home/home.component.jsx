import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Waypoint } from 'react-waypoint'

import {setSectionTitleText } from '../../redux/element-props/element-props.actions'

import Banner from '../../components/banner/banner.component'
import PreviewAbout from '../../components/preview-about/preview-about.component'
import PreviewAi from '../../components/preview-ai/preview-ai.component'
import PreviewProjects from '../../components/preview-projects/preview-projects.component'
import PreviewServices from '../../components/preview-services/preview-services.component'
import Footer from '../../components/footer/footer.component'

import './home.styles.scss'

const HomePage = ({ setSectionTitleText }) => {

  useEffect(() => {
    setSectionTitleText('01 - Introduction')
  }, [])
  
  return (
    <div className='home-page'>
      <Banner />
      <PreviewAbout />
      <Waypoint
        scrollableAncestor={window}
        topOffset='-100000px'
        bottomOffset='10%'
        onEnter={() => { setSectionTitleText('02 - Artificial Intelligence') }}
        onLeave={() => { setSectionTitleText('01 - Introduction') }} 
      />
      <PreviewAi />
      <Waypoint
        scrollableAncestor={window}
        topOffset='-100000px'
        bottomOffset='10%'
        onEnter={() => { setSectionTitleText('03 - Projects') }}
        onLeave={() => { setSectionTitleText('02 - Artificial Intelligence') }} 
      />
      <PreviewProjects />
      <Waypoint
        scrollableAncestor={window}
        topOffset='-100000px'
        bottomOffset='10%'
        onEnter={() => { setSectionTitleText('04 - Services') }}
        onLeave={() => { setSectionTitleText('03 - Projects') }} 
      />
      <PreviewServices />
      <Waypoint
        scrollableAncestor={window}
        topOffset='-100000px'
        bottomOffset='10%'
        onEnter={() => { setSectionTitleText('') }}
        onLeave={() => { setSectionTitleText('04 - Services') }} 
      />
      <Footer />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setSectionTitleText: text => dispatch(setSectionTitleText(text))
})

export default connect(null, mapDispatchToProps)(HomePage)