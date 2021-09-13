const BASE_URL = 'http://localhost:3001/auth';

export const postLogin = async (username, password, history) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (data.user) {
      const user = JSON.stringify(data.token);
      localStorage.setItem('user', user);
    } else {
      return data.error;
    }

    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const postRegister = async (
  username,
  email,
  password,
  passwordConfirm,
  history
) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        passwordConfirm,
      }),
    });

    const data = await res.json();

    if (data.user) {
      const user = JSON.stringify(data.token);
      localStorage.setItem('user', user);
    } else {
      return data.error;
    }

    history.push('/');
  } catch (err) {
    console.log(err);
  }
};
