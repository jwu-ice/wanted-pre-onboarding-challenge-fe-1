type requestConfigProps = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body: any;
};

export const requestConfig = ({ method = "GET", body }: requestConfigProps) => {
  if (!body) {
    return { method };
  }

  return {
    method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  };
};

// middleware
// const hasToken = LocalStore.get(AUTH_TOKEN_KEY);

// if (!hasToken) {
//   alert("로그인 정보가 없습니다.");
//   navigate("/auth");
// }
