import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { HeaderContainer, TitleH1, HeaderNav, UL, LI } from './styles';
import { GrLogout } from 'react-icons/gr';
import { useHistory } from 'react-router';

const Header = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
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
              <GrLogout className="logout-button" onClick={handleLogout} />
            </LI>
          </UL>
        </HeaderNav>
      )}
    </HeaderContainer>
  );
};

export default Header;
