import React from 'react'
import TextAnimation from '../text-animation/text-animation.component'

import './preview-about.styles.scss'

const PreviewAbout = () => {

  const text = () => ( 
    <span>Integrity Technology Solutions (ITS) was founded to develop technology to encourage <span className='orange'>trust</span> for transactions in the Energy Industry. With decades of <span className='orange'>experience</span> in Oil & Gas Joint Venture and Vendor Audit, the founders of ITS recognize and understand first hand what the industry pain points are. Our mission is to educate, engineer and develop solutions specific to this niche. No other <span className='orange'>technology</span> provider understands the nuances of vendor and Joint Venture transactions better than ITS.</span>
  )
  
  return (
    <section className='preview-about'>

      <div className='about-text'>
        <TextAnimation text={text} size='big' />
      </div>
    </section>
  )
}

export default PreviewAbout