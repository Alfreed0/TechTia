const URL_SERVER = process.env.REACT_APP_URL_SERVER;

export async function getUserByEmail(email) {
  const url = new URL(URL_SERVER);
  url.pathname = '/users/token/' + email;
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status >= 400 && response.status < 600) {
    const { error, message } = await response.json();
    throw new Error(error || message);
  }
  
  return response.json();
}