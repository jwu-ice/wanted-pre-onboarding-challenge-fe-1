import SignUpForm from "@/components/auth/SignUpForm";

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <h1 className="mb-4 font-bold text-4xl text-primary-content">
          Sign up
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
