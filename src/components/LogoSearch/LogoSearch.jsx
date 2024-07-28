import React from 'react'
// import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
   <div className="LogoSearch">
       <div className="Search">
           <input type="text" placeholder='#Khám phá' />
           <div className="s-icon">
               <UilSearch/>
           </div>
       </div>
   </div>
  )
}

export default LogoSearch