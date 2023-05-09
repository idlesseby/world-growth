import React from 'react'
import ProfileImage from '/src/assets/default.png'

export default function Header() {
  return (
    <nav className='header'>
      <img src={ProfileImage} />
      <span>Random User</span>
    </nav>
  )
}