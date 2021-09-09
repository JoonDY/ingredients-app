const BASE_URL = 'http://localhost:3001/auth';

export const postLogin = async (username, password, setUser) => {
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

    const user = JSON.stringify(data);
    localStorage.setItem('user', user);
    setUser(data.user);
  } catch (err) {
    console.log(err);
  }
};

export const postRegister = async (username, password, setUser) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
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

    const user = JSON.stringify(data);
    localStorage.setItem('user', user);
    setUser(data);
  } catch (err) {
    console.log(err);
  }
};
