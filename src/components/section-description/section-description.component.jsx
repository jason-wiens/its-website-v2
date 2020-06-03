import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectSectionTitleText, selectSectionTitleColor } from '../../redux/element-props/element-props.selector'

import './section-descripiton.styles.scss'

const SectionDescription = ({ text, color }) => (
  <div className={`section-description ${color}`}>{text}</div>
)

const mapStateToProps = createStructuredSelector({
  text: selectSectionTitleText,
  color: selectSectionTitleColor
})

export default connect(mapStateToProps)(SectionDescription);