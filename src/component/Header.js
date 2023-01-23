import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-cont'>
        <Link to='/'><h1>Capstone</h1></Link>
        <Link to='/cart'><AiOutlineShoppingCart className='cart-icon' /></Link>
    </div>
  )
}

export default Header