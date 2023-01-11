import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Navbar from "@/pages/NavBar";
import NotFound from "@/pages/NotFound";
import Todo from "@/pages/Todo";
import { Route, Routes } from "react-router-dom";

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
