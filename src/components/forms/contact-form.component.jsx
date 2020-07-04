import React, { useState } from 'react'
import { ajax } from 'jquery'
import { useSpring, animated } from 'react-spring'
import { withRouter } from 'react-router-dom'

import { FormInput, FormTextArea } from './form-input.component'

import './contact-form.styles.scss'

const ContactForm = ({ history }) => {

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    content: ''
  })

  const [waiting, toggleWaiting] = useState(false)
  const [success, toggleSuccess] = useState(false)
  const [fail, toggleFail] = useState(false)
  const [form, toggleForm] = useState(true)

  const resetForm = () => {
    toggleWaiting(false)
    toggleSuccess(false)
    toggleFail(false)
    toggleForm(true)
    setInputs({
      firstName: '',
      lastName: '',
      email: '',
      content: ''
    })
  } 

  const shrinkBox = useSpring({
    transformOrigin: 'center',
    transform: waiting ? 'scale(0.8)' : 'scale(1)'
  })

  const handleSubmit = async event => {
    event.preventDefault()
    toggleForm(false)
    toggleWaiting(true)

    const url = "https://m2hres6qf4.execute-api.us-west-2.amazonaws.com/pawsitive-api-deploy/registration"
    const { firstName, email, lastName, content } = inputs;

    const data = {
      first_name : firstName,
      last_name: lastName,
      email : email,
      phone : content
    }

    ajax({
      type: "POST",
      url : url,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: () => {
        toggleWaiting(false)
        toggleSuccess(true)
      },
      error: () => {
        toggleWaiting(false)
        toggleFail(true)
      }
    })
  }

  const handleChange = event => {
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value })
  }
  
  const { firstName, email, lastName, content } = inputs;
  return (
    <animated.div className='contact-form-container' style={shrinkBox}>
    { form ?
        <div className="container-content">
          <h2 className="title">Contact Us</h2>
          <p className="text">Please fill out the form below and we will get back to you as soon as possible. If you would prefer to talk to us over the phone please call Kody Carroll at <a href="tel:4038138837">(403) 813-8837</a>.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <FormInput
              type='text'
              name='firstName'
              value={firstName}
              onChange={handleChange}
              label='First Name'
              required
            />
            <FormInput
              type='text'
              name='lastName'
              value={lastName}
              onChange={handleChange}
              label='Last Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              label='Email'
              required
            />
            <FormTextArea
              name='content'
              value={content}
              onChange={handleChange}
              label='What can we help you with...'
              rows='5'
              required
            />
            <button className="submit-button" type='submit'>Submit</button>
          </form>
        </div>
      : <div />
    }
    { 
      waiting 
      ? <div className='spinner-container'>
          <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
          </svg>
        </div>
      : <div />
    }
    {
      success
      ? <div className='response-container'>
          <p><span className='large success'>Success!</span><br/>We will get back to you as soon as possible.</p>
          <button onClick={() => history.push('/')}>return home</button>
          <button className='inverted' onClick={resetForm}>reset form</button>
        </div>
      : <div />
    }
    {
      fail
      ? <div className='response-container'>
          <p><span className='large fail'>Sorry!</span><br/>Something went wrong... please try again!</p>
          <button onClick={resetForm}>reset form</button>
        </div>
      : <div />
    }
    </animated.div>
  )
}

export default withRouter(ContactForm)

