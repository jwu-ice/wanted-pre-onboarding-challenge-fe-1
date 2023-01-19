import { AUTH_TOKEN_KEY } from "@/constants/env";
import { LocalStore } from "@/utils/browserStore";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    alert("로그아웃 되었습니다!");
    LocalStore.remove(AUTH_TOKEN_KEY);
    navigate("/auth");
  };

  return { onLogout };
};
