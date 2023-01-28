import axios from "axios";

const API_URL = "http://localhost:3001";

/**
 * functie care sa-mi aduca userul validat de la server.
 * @param {username, password} string
 */
export async function getValidatedUser({ email, password }) {
  const response = await axios.get(`${API_URL}/users`);
  const user = response.data.find(
    (user) => user.password === password && user.email === email
  );

  if (user) {
    return user;
  }

  throw new Error("Bad credentials");
}

export const getCurrentUser = async (username) => {
  const response = await axios.get(`${API_URL}/users`);
  const user = response.data.find((user) => user.username === username);

  if (user) {
    return user;
  }

  throw new Error("No user found");
};

export const postCurrentUser = async ({ username, email, password }) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  return await response.json();
};
