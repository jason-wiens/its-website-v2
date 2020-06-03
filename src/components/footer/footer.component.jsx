import React from 'react'
import { withRouter } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo/logo - white-orange.svg'
import { MENU_ITEMS } from '../mobile-menu/menu-items'

import './footer.styles.scss'

const Footer = ({ history }) => {
  return (
    <div className='footer-container'>
      <div className="spacer" />
      <div className="footer">
        <div className="left">
          <div className="logo-container">
            <Logo />
          </div>
          <div className="name">Integrity Technology Solutions</div>
          <div className="links">
            <a href="mailto: kcarroll@integrity-tech.ca">Email: kcarroll@integrity-tech.ca</a>
            <a href="tel:4038138837">Phone: (403) 813-8837</a>
          </div>
          <div className="copyright">&#169; 2020 Integrity Technology Solutions</div>
        </div>
        <div className="right">
          <ul className="footer-menu">
            {
              MENU_ITEMS.map(({ id, url, displayName }) => (
                <li 
                  key={id} 
                  className={`menu-item ${(id === 1 || id === 7) ? 'white' : ''}`}
                  onClick={() => history.push(url)}
                >
                  {displayName}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default withRouter(Footer)
