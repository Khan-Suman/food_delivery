import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
<div className='footer' id='footer'>
     <div className='footer-contents'>
      <div className='footer-left-contents'>
         <img src={assets.logo} alt='' />
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
         <div className='social-media-icons'>
           <img src={assets.facebook_icon} alt=''/>
           <img src={assets.twitter_icon} alt='' />
           <img src={assets.linkedin_icon} alt='' />
         </div>
      </div>
      <div className='footer-center-contents'>
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
      </div>
      <div className='footer-right-contents'>
        <h2>GET IN TOUCH</h2>
        <p>+1-212-456-7890</p>
        <p>contact@tomato.com</p>
      </div>
     </div>
     <hr />
    </div>
  )
}

export default Footer