import { AUTH_TOKEN_KEY } from "@/constants";
import LocalStore from "@/utils/localStore";

const SERVER_URL = "http://localhost:8080";

export async function postLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${SERVER_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token, message } = await response.json();
    LocalStore.set(AUTH_TOKEN_KEY, token);
    return { status: true, data: message };
  }

  const { details: failData } = JSON.parse(await response.text());
  return { status: false, data: failData };
}

export async function postSignUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${SERVER_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    LocalStore.set(AUTH_TOKEN_KEY, data.token);
    return { status: true };
  }

  const failData = JSON.parse(await response.text()).details;
  return { status: false, data: failData };
}
