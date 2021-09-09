import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, setUser } = useContext(UserContext);
  // const [currentUser, setCurrentUser] = useState(
  //   JSON.parse(localStorage.getItem('user'))
  // );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    // setCurrentUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
