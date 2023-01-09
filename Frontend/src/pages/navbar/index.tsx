import { AUTH_TOKEN_KEY } from "@/constants";
import LocalStore from "@/utils/localStore";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    state: { email },
  } = useLocation();

  const handleLogout = () => {
    alert("로그아웃 되었습니다!");
    LocalStore.remove(AUTH_TOKEN_KEY);
    navigate("/auth");
  };

  return (
    <>
      <div className="navbar bg-base-100 flex justify-between">
        <h1 className="text-lg">{email ? email : "Not Found Email"}</h1>
        <a onClick={handleLogout} className="btn btn-ghost normal-case">
          Logout
        </a>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
