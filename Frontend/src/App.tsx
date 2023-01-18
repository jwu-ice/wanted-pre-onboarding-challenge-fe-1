import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Navbar from "@/pages/NavBar";
import NotFound from "@/pages/NotFound";
import Todo from "@/pages/Todo";
import { Route, Routes } from "react-router-dom";
import TodoDetail from "@/components/TodoList/TodoDetail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Todo />} />
        </Route>
        <Route path="/auth" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer limit={1} />
    </div>
  );
};

export default App;
