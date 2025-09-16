import React from 'react'
import logo from '../images/logo.svg'

import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const NavBar = () => {
  return (
     <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
      <PageLinks parentClass="nav-links" itemClass='nav-link'/>
      <SocialLinks parentClass="nav-icons" itemClass='nav-icon'/>
       
      </div>
    </nav>
  )
}

export default NavBar

