import { AUTH_REQUEST_KEY, AUTH_TOKEN_KEY } from "@/constants/env";
import { ERROR_MESSAGE } from "@/constants/errorMessage";
import { LocalStore } from "@/utils/browserStore";

type requestConfigProps = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: any;
};

export const requestConfig = ({
  method = "GET",
  body,
  headers,
}: requestConfigProps) => {
  if (!body || method === "GET") {
    return {};
  }

  const result = {
    method,
    headers: {
      "Content-type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };

  return result;
};

export const getHeaderToken = () => {
  const authToken = LocalStore.get(AUTH_TOKEN_KEY);
  if (authToken === null) throw Error(ERROR_MESSAGE.AUTH_NOT_TOKEN);

  const result = { [AUTH_REQUEST_KEY]: authToken };
  return result;
};
