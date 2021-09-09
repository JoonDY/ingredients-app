import { useState, useContext } from 'react';
import { postLogin } from '../../api/user';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    await postLogin(username, password, setUser);
    history.push('/');
  };

  if (user) {
    history.push('/');
  }

  return (
    <div>
      <h3>Login</h3>
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
        <button onClick={handleLogin}>Login</button>
      </form>
      <Link to="/signup">Create Account</Link>
    </div>
  );
};

export default Login;
