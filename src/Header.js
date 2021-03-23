import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>
            <h3>RGIPT TIME TABLE GENERATOR</h3>
            </div>
            <div className='header__links'>
               <Link to='/'>
               <img src='https://www.rgipt.ac.in/images/logo.png'></img>
               </Link> 
             
            </div>
            
        </div>
    )
}

export default Header
