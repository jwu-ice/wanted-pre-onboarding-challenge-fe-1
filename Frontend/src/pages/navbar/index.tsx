import LocalStore from "@/utils/localStore";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLogout } from "../../hooks/auth/useLogout";
import { useCheckLoginValid } from "@/hooks/auth/useCheckLoginValid";

const Navbar = () => {
  const { onLogout } = useLogout();
  const { onCheckLoginValid } = useCheckLoginValid();
  const email = LocalStore.get("email");

  useEffect(() => {
    onCheckLoginValid();
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 justify-between shadow-md my-4">
        <h1 className="text-lg">{email ? email : "Not Found Email"}</h1>
        <a onClick={() => onLogout()} className="btn btn-ghost normal-case">
          Logout
        </a>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
