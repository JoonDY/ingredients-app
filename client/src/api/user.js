const BASE_URL = 'http://localhost:3001/auth';

export const postLogin = async (username, password) => {
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
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const postRegister = async (username, password) => {
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
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
