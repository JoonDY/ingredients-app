import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postRegister } from '../../api/user';
import { useHistory } from 'react-router';
import {
  ModalContent,
  H3,
  Label,
  Form,
  AuthButton,
  AuthInput,
} from '../../shared/globals';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    await postRegister(username, email, password);
    history.push('/');
  };

  return (
    <ModalContent>
      <H3>MyIngredientList</H3>
      <H3>Sign Up</H3>
      <Form>
        <Label>Username</Label>
        <AuthInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label>Email</Label>
        <AuthInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Password</Label>
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Label>Confirm Password</Label>
        <AuthInput
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <AuthButton onClick={handleRegister}>Register</AuthButton>
      </Form>
      <Link className="react-link" to="/login">
        Already have an account?
      </Link>
    </ModalContent>
  );
};

export default Signup;
