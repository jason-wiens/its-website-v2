import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { setSectionTitleText } from '../../redux/element-props/element-props.actions'

import ComingSoon from '../../components/coming-soon/coming-soon.component.jsx'

import './consulting.styles.scss'

const ConsultingPage = ({ setSectionTitleText }) => {
  
  useEffect(() => {
    setSectionTitleText('Consulting')
  }, [])

  return (
    <div className='consulting-page'>
      <ComingSoon 
        sectionTitle='Consulting Services'
        sectionText='We are working hard to bring additional content to our website. Thank you for your patience. If you would like additional information on our products and services we would be happy to buy you a coffee and have a conversation. Please contact us!'
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setSectionTitleText: text => dispatch(setSectionTitleText(text))
})

export default connect(null, mapDispatchToProps)(ConsultingPage)