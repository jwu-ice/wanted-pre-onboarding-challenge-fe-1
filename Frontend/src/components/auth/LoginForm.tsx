import { ChangeEvent, useCallback, useState } from "react";
import InputLabelForm from "@/components/common/InputLabelForm";
import * as api from "@/apis/auth";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  // email, password 조건은 서버에서만 확인하는데 프론트 둘다 확인하는게 맞는거겠지?
  const handleSignUp = async () => {
    const { status, data } = await api.postSignUp({
      email: email,
      password: password,
    });

    if (status) {
      navigate("/", { state: { email } });
    } else {
      setMessage(data);
    }
  };

  return (
    <div className="card w-full shadow-2xl bg-base-100">
      <div className="card-body">
        <div>
          <InputLabelForm
            className={`border-[3px]  ${
              message
                ? "border-red-500"
                : "hover:border-blue-500/50 focus:border-blue-500"
            }`}
            labelText="Email"
            type="text"
            placeholder="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <InputLabelForm
            className={`border-[3px]  ${
              message
                ? "border-red-500"
                : "hover:border-blue-500/50 focus:border-blue-500"
            }`}
            labelText="Password"
            type="password"
            placeholder="password"
            value={password}
            onChange={handleChangePassword}
          />
          <div className="absolute text-red-500 mt-1">{message}</div>
        </div>
        <div className="xl:flex xl:gap-10 mt-8">
          <div className="form-control xl:mt-0 flex-auto">
            <button className="btn btn-primary" onClick={handleSignUp}>
              Login
            </button>
          </div>
          <label className="label justify-center gap-2 flex-1 ">
            <span className="label-text-alt text-primary ">Not a member?</span>
            <Link
              to="/signUp"
              className="label-text-alt link-info link no-underline hover:underline text-primary-focus"
            >
              Signup now
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
