import React from 'react'
import logobookmark from './images/logo-bookmark.svg'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logobookmark} alt='bookmarklogo'></img>
      </div>
      <ul>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>CONTACT</li>
        <li>LOGIN</li>
      </ul>
    </nav>
  )
}

export default Navbar
