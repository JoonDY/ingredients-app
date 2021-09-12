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
  ErrorMessage,
} from '../../shared/globals';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    if (!username || !password) {
      setErrors({ message: 'Please enter log in information' });
      return false;
    } else {
      setErrors({});
      return true;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      const res = await postLogin(username, password, history);
      if (res) {
        setErrors({ message: res });
      }
    }
  };

  return (
    <ModalContent>
      <H3>MyIngredientList</H3>
      <Form>
        {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
        <Label>Username</Label>
        <AuthInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Label>Password</Label>
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <AuthButton onClick={handleLogin}>Log In</AuthButton>
      </Form>
      <Link className="react-link" to="/signup">
        Create Account
      </Link>
    </ModalContent>
  );
};

export default Login;
