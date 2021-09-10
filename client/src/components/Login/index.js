import { useState } from 'react';
import { postLogin } from '../../api/user';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {
  ModalContent,
  H3,
  Label,
  Form,
  AuthButton,
  AuthInput,
} from '../../shared/globals';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    await postLogin(username, password);
    history.push('/');
  };

  return (
    <ModalContent>
      <H3>MyIngredientList</H3>
      <Form onSubmit={handleLogin}>
        <Label>Username</Label>
        <AuthInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Password</Label>
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthButton>Log In</AuthButton>
      </Form>
      <Link className="react-link" to="/signup">
        Create Account
      </Link>
    </ModalContent>
  );
};

export default Login;
