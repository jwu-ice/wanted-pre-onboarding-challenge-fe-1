import { getHeaderToken, requestConfig } from "@/apis/helpers";
import { AUTH_REQUEST_KEY, AUTH_TOKEN_KEY, SERVER_URL } from "@/constants/env";
import { ERROR_MESSAGE } from "@/constants/errorMessage";
import { todoType } from "@/types/todo";
import LocalStore from "@/utils/localStore";

export const todoApi = {
  getTodos: async () => {
    const authToken = LocalStore.get(AUTH_TOKEN_KEY);

    if (!authToken) {
      return Promise.reject(ERROR_MESSAGE.AUTH_NOT_TOKEN);
    }

    const response = await fetch(`${SERVER_URL}/todos`, {
      headers: getHeaderToken(),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return await Promise.reject(ERROR_MESSAGE.DO_NOT_COMMUNICATE);
  },

  getTodoById: async (id: string) => {
    const authToken = LocalStore.get(AUTH_TOKEN_KEY);

    if (!authToken) {
      return Promise.reject(ERROR_MESSAGE.AUTH_NOT_TOKEN);
    }

    const response = await fetch(`${SERVER_URL}/todos/${id}`, {
      headers: getHeaderToken(),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return await Promise.reject(ERROR_MESSAGE.DO_NOT_COMMUNICATE);
  },

  createTodo: async ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    const authToken = await LocalStore.get(AUTH_TOKEN_KEY);

    if (!authToken) {
      return Promise.reject(ERROR_MESSAGE.AUTH_NOT_TOKEN);
    }

    const response = await fetch(`${SERVER_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getHeaderToken(),
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return await Promise.reject(ERROR_MESSAGE.DO_NOT_COMMUNICATE);
  },

  updateTodo: async ({
    id,
    title,
    content,
  }: {
    id: string;
    title: string;
    content: string;
  }) => {
    const authToken = await LocalStore.get(AUTH_TOKEN_KEY);

    if (!authToken) {
      return Promise.reject(ERROR_MESSAGE.AUTH_NOT_TOKEN);
    }

    const response = await fetch(`${SERVER_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...getHeaderToken(),
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return await Promise.reject(ERROR_MESSAGE.DO_NOT_COMMUNICATE);
  },

  deleteTodo: async ({ id }: { id: string }) => {
    const authToken = await LocalStore.get(AUTH_TOKEN_KEY);

    if (!authToken) {
      return Promise.reject(ERROR_MESSAGE.AUTH_NOT_TOKEN);
    }

    const response = await fetch(`${SERVER_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        ...getHeaderToken(),
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return await Promise.reject(ERROR_MESSAGE.DO_NOT_COMMUNICATE);
  },
};
