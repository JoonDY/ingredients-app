import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <h1>Recipe App</h1>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li>Ingredients</li>
          <li>Recipes</li>
          <li>Shopping List</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
