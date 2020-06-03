import React from 'react'

import rpaImg800 from '../../assets/img/services/rpa/robot-typing-800.jpg'
import rpaImg400 from '../../assets/img/services/rpa/robot-typing-400.jpg'

import bcImg800 from '../../assets/img/services/blockchain/blockchain-800.jpg'
import bcImg400 from '../../assets/img/services/blockchain/blockchain-400.jpg'

import consultImg800 from '../../assets/img/services/consulting/consult-800.jpg'
import consultImg400 from '../../assets/img/services/consulting/consult-400.jpg'

const sizes = "(min-width: 600px) 100vw, 30vw"

const rpaImg = () => (
  <img 
    srcset={`${rpaImg800} 800w,
            ${rpaImg400} 400w`}
    sizes={sizes}      
    src={rpaImg800} 
    alt="A robot typing on a computer"
  />
)

const bcImg = () => (
  <img 
    srcset={`${bcImg800} 800w,
            ${bcImg400} 400w`}
    sizes={sizes}      
    src={bcImg800} 
    alt="A series of graphic cards powering a blockchain"
  />
)

const consultImg = () => (
  <img 
    srcset={`${consultImg800} 800w,
            ${consultImg400} 400w`}
    sizes={sizes}      
    src={consultImg800} 
    alt="A buisness meeting with a consultant"
  />
)

export const services = [
  {
    'title': 'Robotic Process Automation (RPA)',
    'uid': 'rpa',
    'url': '/rpa',
    'img': rpaImg,
    'description': 'RPA is the one of the fastest growing sectors of artificial intelligence that maximises employee output and quality of life by automating mundane and repetitive tasks. ITS combines the use of popular RPA tools and inhouse trained machine learning models to create custom automation routines for everyday tasks.'
  },
  {
    'title': 'Blockchain',
    'uid': 'bc',
    'url': '/blockchain',
    'img': bcImg,
    'description': 'ITS believes in the long-term solution that blockchain technology promises to the supply chain and joint venture space. As blockchain technology matures in the oil and gas industry, ITS is providing leadership in industry associations and has formed partnerships with the major blockchain developers in Calgary to consult on solutions specific to joint venture and vendor-client relationship.'
  },
  {
    'title': 'Consulting',
    'uid': 'consult',
    'url': '/consulting',
    'img': consultImg,
    'description': 'Integrity Technology Solutions (ITS) has a unique blend of joint venture experience and technological expertise to assist your organization through transformational changes in the joint venture space. From providing advice on how to organize internal business processes to project management associated with the implementation of new technologies, our team has the experience and industry background to get your projects deployed.'
  },
]