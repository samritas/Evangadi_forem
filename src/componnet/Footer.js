import React from 'react'
import {Link} from'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
     <div className='footer_elements'>
     <img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png" alt=""/>
     {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}

     </div>
     <div  className='footer_elements'>
      <h3>Useful Link</h3>
    <Link>how it works</Link>
    <br />
    <Link>Terms of Service</Link>
    <br />
    <Link>Privacy policy</Link>
     </div>
     <div  className='footer_elements'>
     <h3>Contact Info</h3>
    <Link>Evangadi Network</Link>
    <br />
      <Link>support@evangadi.com</Link>
      <br />
    <Link>+1-202 386-2702</Link>
     </div>
    </div>
  )
}

export default Footer
