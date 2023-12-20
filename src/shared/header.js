import React from 'react';
import {NavLink} from 'react-router-dom'
import './header.css'

const Header = () => {
 
  return(
      <div >
          <nav className = 'header'>
               <NavLink  to = './'>Home</NavLink>
               <NavLink  to = './form'>Form</NavLink>
               <NavLink exact activeClassName="active" to = './about'>About</NavLink>
          </nav>
             
      </div>
  )

}

export default Header