import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useState,
  useEffect,
} from "react";
import InputLabelForm from "@/components/common/InputLabelForm";
import * as api from "@/apis/auth";
import { Link, useNavigate } from "react-router-dom";
import InputMessage from "@/components/common/InputMessage";
import { loginValidator } from "@/utils/validator";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isValidButton, setIsValidButton] = useState(false);

  const navigate = useNavigate();

  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  }, []);

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value.trim());
    },
    []
  );

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { status, data } = await api.postLogin({
      email: email,
      password: password,
    });

    if (status) {
      setMessage(data);
      alert(data);
      navigate("/", { state: { email }, replace: true });
    }

    setMessage(data);
  };

  useEffect(() => {
    const { isValid, message: errorMessage } = loginValidator({
      email,
      password,
    });

    if (isValid) {
      setIsValidButton(true);
    } else {
      email && password && setMessage(errorMessage as string);
      setIsValidButton(false);
    }
  }, [email, password]);

  return (
    <div className="card w-full shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmitLogin}>
        <div>
          <InputLabelForm
            className={`border-[3px] ${
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
          <InputMessage message={message} />
        </div>
        <div className="xl:flex xl:gap-6 mt-8">
          <div className="form-control xl:mt-0 flex-1">
            <button
              type="submit"
              className={`btn ${
                isValidButton ? "btn-primary" : "btn-disabled bg-slate-200"
              }`}
            >
              Login
            </button>
          </div>
          <label className="label justify-center gap-2 flex-1 ">
            <span className="label-text-alt text-primary ">Not a member?</span>
            <Link
              to="/signUp"
              className="label-text-alt link-info link no-underline hover:underline text-primary-focus text-sm "
            >
              Signup now
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
