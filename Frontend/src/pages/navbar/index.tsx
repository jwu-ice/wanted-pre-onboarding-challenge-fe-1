import { AUTH_TOKEN_KEY } from "@/constants/env";
import LocalStore from "@/utils/localStore";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLogout } from "../../hooks/auth/useLogout";
import { useCheckLoginValid } from "@/hooks/auth/useCheckLoginValid";

const Navbar = () => {
  const { onLogout } = useLogout();
  const { onCheckLoginValid } = useCheckLoginValid();

  const { state } = useLocation();

  useEffect(() => {
    onCheckLoginValid();
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 justify-between shadow-md my-4">
        <h1 className="text-lg">
          {state?.email ? state.email : "Not Found Email"}
        </h1>
        <a onClick={() => onLogout()} className="btn btn-ghost normal-case">
          Logout
        </a>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
