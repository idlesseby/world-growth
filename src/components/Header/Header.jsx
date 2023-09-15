import React from 'react'
import ProfileImage from '/src/assets/default.png'
import './Header.css'

export default function Header() {
  return (
    <nav className='header'>
      <img src={ProfileImage} />
      <span>Username</span>
    </nav>
  )
}