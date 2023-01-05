import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <h1 className="mb-4 font-bold text-4xl text-primary-content">
          To Do List
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
