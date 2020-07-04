import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Particles from 'react-particles-js'

import { setSectionTitleText } from '../../redux/element-props/element-props.actions'

import ContactForm from '../../components/forms/contact-form.component'

import './contact.styles.scss'

const ConsultingPage = ({ setSectionTitleText }) => {
  
  useEffect(() => {
    setSectionTitleText('Contact Us')
  }, [])

  const windowWidth = window.innerWidth
  let numParticles = 0
  if (windowWidth > 2000) {
    numParticles = 150
  } else if (windowWidth > 1800) {
    numParticles = 125
  } else if (windowWidth > 1500) {
    numParticles = 100
  } else if (windowWidth > 1200) {
    numParticles = 75
  } else if (windowWidth > 1000) {
    numParticles = 50
  }

  return (
    <div className='contact-page'>
    { 
      windowWidth < 1000 
      ? <div />
      : <div className="particles-container">
          <Particles
            height='90vh'
            width='100%'
            params={{
              "particles": {
                "number": {
                  "value": numParticles
                },
                "size": {
                  "value": 2
                },
                "color": {
                  "value": "#070039"
                },
                "line_linked": {
                  "color": "#f56d23",
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
    }
      <div className="form-container">
        <ContactForm />
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setSectionTitleText: text => dispatch(setSectionTitleText(text))
})

export default connect(null, mapDispatchToProps)(ConsultingPage)