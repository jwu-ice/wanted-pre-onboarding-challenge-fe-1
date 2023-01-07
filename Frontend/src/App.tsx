import { AUTH_TOKEN_KEY } from "@/constants";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Navbar from "@/pages/navbar";
import NotFound from "@/pages/notFound";
import Todo from "@/pages/todo/Todo";
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
