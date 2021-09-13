import React from 'react';
import Login from '../../components/Login';
import { MainContainer } from '../Home/styles';

const LoginPage = () => {
  // const history = useHistory();

  // if (localStorage.getItem('user')) {
  //   history.replace('/');
  // }

  return (
    <MainContainer>
      <Login />
    </MainContainer>
  );
};

export default LoginPage;
