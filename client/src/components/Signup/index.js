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
  ErrorMessage,
} from '../../shared/globals';

const Signup = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!values.username.trim()) {
      errors.username = 'Username required';
    } else if (values.username.length < 2) {
      errors.username = 'Username needs to be greater than 2 characters';
    }

    if (!values.email) {
      errors.email = 'Email required';
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    ) {
      errors.email = 'Email invalid';
    }

    if (!values.password) {
      errors.password = 'Password required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be more than 6 characters';
    }

    if (values.passwordConfirm !== values.password) {
      errors.passwordConfirm = 'Passwords do not match';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      const { username, email, password, passwordConfirm } = values;
      const res = await postRegister(
        username,
        email,
        password,
        passwordConfirm,
        history
      );
      console.log(res);
      setErrors({
        server: res,
      });
    } else return;
  };

  return (
    <ModalContent>
      <H3>MyIngredientList</H3>
      <H3>Sign Up</H3>
      <Form>
        {errors.server && <ErrorMessage>{errors.server}</ErrorMessage>}
        <Label>Username</Label>
        <AuthInput
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          required
        />
        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        <Label>Email</Label>
        <AuthInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Label>Password</Label>
        <AuthInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <Label>Confirm Password</Label>
        <AuthInput
          type="password"
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          required
        />
        {errors.passwordConfirm && (
          <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
        )}
        <AuthButton onClick={handleRegister}>Register</AuthButton>
      </Form>
      <Link className="react-link" to="/login">
        Already have an account?
      </Link>
    </ModalContent>
  );
};

export default Signup;
