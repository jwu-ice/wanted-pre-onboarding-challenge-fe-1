import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import NotFound from "@/pages/notFound";
import Todo from "@/pages/todo";
import LocalStore from "@/utils/localStore";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = LocalStore.get("auth-token");
    hasToken ? navigate("/") : navigate("/auth");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
