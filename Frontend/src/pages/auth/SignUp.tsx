import InputLabelForm from "@/components/common/InputLabelForm";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import * as api from "@/apis/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");

  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  }, []);

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value.trim());
    },
    []
  );

  const handleChangeCheckPassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCheckPassword(e.target.value.trim());
    },
    []
  );

  const handleSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { status, data } = await api.postSignUp({
      email: email,
      password: password,
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <h1 className="mb-4 font-bold text-4xl text-primary-content">
          Sign up
        </h1>
        <form onSubmit={handleSubmitSignUp}>
          <div>
            <div>
              <InputLabelForm
                labelText="Email"
                type="text"
                placeholder="email"
                value={email}
                onChange={handleChangeEmail}
              />
              <InputLabelForm
                labelText="Password"
                type="password"
                placeholder="password"
                value={password}
                onChange={handleChangePassword}
              />
              <InputLabelForm
                labelText="Check Password"
                type="password"
                placeholder="password"
                value={CheckPassword}
                onChange={handleChangeCheckPassword}
              />
              {/* <InputMessage message={message} /> */}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
