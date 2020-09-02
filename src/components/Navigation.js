import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <Link className='navbar-brand' to='/'>
        Logo
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarCollapse'
        aria-controls='navbarCollapse'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink exact activeClassName='active' className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact activeClassName='active' className='nav-link' to='/about'>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
