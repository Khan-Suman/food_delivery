import React from 'react'

import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
     <h2>For Better Experience Download <br /> Tomato App</h2>
     <div className='app-download-store'>
       <img src={assets.app_store} alt='' />
       <img src={assets.play_store} alt='' />
     </div>
    </div>
  )
}

export default AppDownload