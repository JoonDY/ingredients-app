import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import { UserContext } from '../context/UserContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return !user ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PublicRoute;
