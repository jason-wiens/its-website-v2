import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import BigTitle from '../big-title/big-title.component'
import ImageAnimation from '../image-animation/image-animation.component'

import img2800 from '../../assets/img/services/office-2800.jpg'
import img1800 from '../../assets/img/services/office-1800.jpg'
import img900 from '../../assets/img/services/office-900.jpg'
import img400 from '../../assets/img/services/office-400.jpg'

import { services } from './services-content'

import './preview-services.styles.scss'

const PreviewServices = ({ history }) => {
  const [service, setService] = useState('rpa') // rpa, bc, consult

  const img = () => (
    <img 
      srcset={`${img2800} 2800w,
              ${img1800} 1800w,
              ${img900} 900w,
              ${img400} 400w`}
      sizes="(min-width: 600px) 100vw,
              80vw"       
      src={img1800} 
      alt="coworkers collaborating on a project"
    />
  )

  return (
    <div className='preview-services'>
      <BigTitle title='Other Services' side='right' offset='-5' />
      <div className="banner">
        <div className="image-container">
          <ImageAnimation img={img} swipeLeft={false} />
        </div>
      </div>
      <ul className="service-options">
        {
          services.map(({ title, uid }) => (
            <li 
              key={uid} 
              className={`${uid} ${(service === uid) ? 'active' : ''}`}
              onClick={() => setService(uid)}
            >
              {`${title}.`}
              <div className="underline"></div>
            </li>
          ))
        }
      </ul>
      <div className="services-container">
      {
        services.map(({ title, description, uid, url, img }) => (
          <div 
            key={uid} 
            className={`service-container ${uid} ${(service === uid) ? 'active' : ''}`}
          >
            <div className="left">
              <h1>Integrity Technology Solution<br />{title}</h1>
            </div>
            <div className="center">
              <div className="line" />
              <p className="service-text">{description}</p>
              <button onClick={() => history.push(url)}>learn more</button>
            </div>
            <div className="right">
              <div className={`img-container ${(service === uid) ? 'active' : ''}`}>{img()}</div>
            </div>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default withRouter(PreviewServices)
