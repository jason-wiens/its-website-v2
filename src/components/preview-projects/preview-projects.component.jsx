import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import { withRouter } from 'react-router-dom'

import BigTitle from '../big-title/big-title.component'
import AuditbotGraphic from '../auditbot-graphic/auditbot-graphic.component'

import './preview-projects.styles.scss'

const PreviewProjects = ({ history }) => {

  const [subTitleShowing, toggleSubTitle] = useState(false)
  const lineAnimation = useSpring({
    config: config.slow,
    transformOrigin: 'right',
    transform: subTitleShowing ? 'scale(1,1)' : 'scale(0,1)'
  })
  const subTitleAnimation = useSpring({
    config: config.slow,
    display: 'block',
    transform: subTitleShowing ? 'translate3d(0,0,0)' : 'translate3d(0,100%,0)'
  })

  const [contentShowing, toggleContent] = useState(false)
  const graphicAnimation = useSpring({
    config: config.slow,
    opacity: contentShowing ? 1 : 0
  })
  const contentAnimation = useSpring({
    config: config.slow,
    opacity: contentShowing ? 1 : 0,
    transform: contentShowing ? 'translate3d(0px,0,0)' : 'translate3d(240px,0,0)'
  })


  return (
    <div className='preview-projects'>
      <BigTitle 
        title='Our Projects'
        side='left'
        offset='-10' />
      <div className="sub-title-container">
      <Waypoint
        scrollableAncestor={window}
        onEnter={() => {if(!subTitleShowing) toggleSubTitle(true)}}
        onLeave={() => {if(subTitleShowing) toggleSubTitle(false)}}
        topOffset="-1000%"
        bottomOffset='20%'
      />
        <animated.div className="line" style={lineAnimation} />
        <h3 className='text'>
          <animated.span style={subTitleAnimation}>some things we're working on</animated.span>
        </h3>
      </div>
      <div className="content-container">
        <Waypoint
          scrollableAncestor={window}
          onEnter={() => {if(!contentShowing) toggleContent(true)}}
          onLeave={() => {if(contentShowing) toggleContent(false)}}
          topOffset="-1000%"
          bottomOffset='0'
        />
        <animated.div className="graghic-container" style={graphicAnimation}>
          <AuditbotGraphic />
        </animated.div>
        <animated.div className="content" style={contentAnimation}>
          <h1 className='title'>AUDITBOT.IO (BETA)</h1>
          <div className="description">
            Automate audit functions like coding validation and cost eligibility
          </div>
          <p className="text">
            Auditbot.io was created for a client out of a necessity to do more for less. 
            Auditbot.io automates routine audit tasks, such as coding validation, which frees 
            up auditors time to complete more complex audit functions. Auditbot.io has seen six 
            figure returns for clients in areas of scope that would have gone untested under a 
            traditional audit program.
          </p>
          <button 
            className="btn-more-info"
            onClick={() => history.push('/contact')}  
          >learn more</button>
        </animated.div>
      </div>
        
    </div>
  )
}

export default withRouter(PreviewProjects)
