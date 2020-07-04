import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { setLogoColor } from '../../redux/element-props/element-props.actions'

import './coming-soon.styles.scss'

import imgLrg from '../../assets/img/coming-soon/construction-1200.png'
import imgMed from '../../assets/img/coming-soon/construction-800.png'
import imgSml from '../../assets/img/coming-soon/construction-400.png'


const ComingSoon = ({ sectionTitle, sectionText, history, setLogoColor }) => {

  useEffect(() => {
    setLogoColor('blue-orange')
  }, [])

  return (
    <div className='coming-soon'>
      <div className="left">
        <img 
          srcSet={`${imgLrg} 1200w,
                  ${imgMed} 800w,
                  ${imgSml} 400w`}
          sizes="(min-width: 600px) 100vw,
                  50vw"       
          src={imgLrg} 
          alt="Robot at a touch screen"
        />
      </div>
      <div className="right">
        <h2 className="title">{sectionTitle}</h2>
        <h1 className="subtitle">Under Construction!</h1>
        <p>{sectionText}</p>
        <button 
            className="btn-more-info"
            onClick={() => history.push('/contact')}  
          >contact us</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setLogoColor: logoColor => dispatch(setLogoColor(logoColor))
})

export default withRouter(connect(null, mapDispatchToProps)(ComingSoon))
