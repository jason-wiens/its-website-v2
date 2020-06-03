import React from 'react'

import Banner from '../../components/banner/banner.component'
import PreviewAbout from '../../components/preview-about/preview-about.component'
import PreviewAi from '../../components/preview-ai/preview-ai.component'
import PreviewProjects from '../../components/preview-projects/preview-projects.component'
import PreviewServices from '../../components/preview-services/preview-services.component'

import './home.styles.scss'

const HomePage = () => (
  <div className='home-page'>
    <Banner />
    <PreviewAbout />
    <PreviewAi />
    <PreviewProjects />
    <PreviewServices />
  </div>
)

export default HomePage