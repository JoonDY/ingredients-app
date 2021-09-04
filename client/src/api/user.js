const BASE_URL = 'http://localhost:3001/api/v1/auth';

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
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
