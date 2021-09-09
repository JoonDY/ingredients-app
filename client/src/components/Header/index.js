import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { HeaderContainer, TitleH1, HeaderNav, UL, LI } from './styles';

const Header = () => {
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <HeaderContainer>
      <TitleH1>MyIngredientList</TitleH1>
      {user && (
        <HeaderNav className="navbar">
          <UL className="nav-list">
            <LI>Ingredients</LI>
            <LI>Recipes</LI>
            <LI>Shopping List</LI>
            <LI>
              <a onClick={handleLogout} href="/">
                Logout
              </a>
            </LI>
          </UL>
        </HeaderNav>
      )}
    </HeaderContainer>
  );
};

export default Header;
