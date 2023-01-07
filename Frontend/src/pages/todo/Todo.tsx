import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LocalStore from "@/utils/localStore";
import { AUTH_TOKEN_KEY } from "@/constants";

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = LocalStore.get(AUTH_TOKEN_KEY);

    if (!hasToken) {
      alert("로그인 정보가 없습니다.");
      navigate("/auth");
    }
  }, []);

  return <div>Todo Page</div>;
};

export default Todo;
