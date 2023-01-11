import { AUTH_TOKEN_KEY } from "@/constants";
import Login from "@/pages/Auth/Login";
import SignUp from "@/pages/Auth/SignUp";
import Navbar from "@/pages/NavBar";
import NotFound from "@/pages/NotFound";
import Todo from "@/pages/Todo";
import LocalStore from "@/utils/localStore";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Todo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
