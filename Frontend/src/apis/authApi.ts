import { requestConfig } from "@/apis/helpers";
import { AUTH_TOKEN_KEY, SERVER_URL } from "@/constants/env";
import { LocalStore } from "@/utils/browserStore";

export const authApi = {
  postLogin: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${SERVER_URL}/users/login`, {
      ...requestConfig({ method: "POST", body: { email, password } }),
    });

    if (response.ok) {
      const { token, message } = await response.json();
      LocalStore.set(AUTH_TOKEN_KEY, token);
      return { status: true, data: message };
    }

    const { details: failData } = JSON.parse(await response.text());
    return { status: false, data: failData };
  },

  postSignUp: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${SERVER_URL}/users/create`, {
      ...requestConfig({ method: "POST", body: { email, password } }),
    });

    if (response.ok) {
      const data = await response.json();
      return { status: true, data: data.message, token: data.token };
    }

    const { details: failData } = JSON.parse(await response.text());
    return { status: false, data: failData };
  },
};
