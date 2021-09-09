import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { postRegister } from '../../api/user';
import { useHistory } from 'react-router';
import { UserContext } from '../../context/UserContext';

const Signup = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    postRegister(username, password, setUser);
    history.push('/');
  };

  if (user) {
    history.push('/');
  }

  return (
    <div>
      <h3>Register</h3>
      <form action="submit">
        <label>Email</label>
        <input
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default Signup;
