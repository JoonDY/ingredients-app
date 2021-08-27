import React from 'react';
import { HeaderContainer } from './styles';
import { H1 } from '../../shared/globals';

const Header = () => {
  return (
    <HeaderContainer>
      <H1>Ingredients</H1>
      {/* <nav className='navbar'>
        <ul className='nav-list'>
          <li>Ingredients</li>
          <li>Recipes</li>
          <li>Shopping List</li>
        </ul>
      </nav> */}
    </HeaderContainer>
  );
};

export default Header;
