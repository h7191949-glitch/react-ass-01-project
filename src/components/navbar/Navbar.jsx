import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <nav className='nav-bar'>
        <h1>SHOP.CO</h1>

        <div>
            <ul className='nav-links'>
                <li><Link to="/categorycarts">Shop ↓</Link></li>
                <li><a href='#'>On Sale</a></li>
                <li><a href='#'>New Arrivls</a></li>
                <li><a href='#'>brands</a></li>
                <li><Link to="/checkout">Carts</Link></li>
            </ul>
        </div>

        <div className='nav-search-bar'>
            <input type='text' placeholder='Search for products...'/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className='nav-icons'>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-circle-user"></i>
        </div>
      </nav>
    </>
  )
}