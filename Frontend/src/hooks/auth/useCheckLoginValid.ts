import { AUTH_TOKEN_KEY } from "@/constants/env";
import LocalStore from "@/utils/localStore";
import { useNavigate } from "react-router-dom";

export const useCheckLoginValid = () => {
  const navigate = useNavigate();

  const onCheckLoginValid = () => {
    const hasToken = LocalStore.get(AUTH_TOKEN_KEY);

    if (!hasToken) {
      navigate("/auth");
    }
  };

  return { onCheckLoginValid };
};
