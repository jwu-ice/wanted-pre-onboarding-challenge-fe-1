import InputLabelForm from "@/components/common/InputLabelForm";
import {
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
  memo,
  useEffect,
} from "react";
import InputMessage from "@/components/common/InputMessage";
import { useNavigate } from "react-router-dom";
import { USER_VALIDATION_ERRORS, loginValidator } from "@/utils/validator";
import { authApi } from "@/apis/authApi";

const SignUpForm = () => {
  const [email, setEmail] = useState({ isValid: true, text: "" });
  const [password, setPassword] = useState({ isValid: true, text: "" });
  const [checkPassword, setCheckPassword] = useState({
    isValid: true,
    text: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail((prev) => ({ ...prev, text: e.target.value.trim() }));
  }, []);

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword((prev) => ({ ...prev, text: e.target.value.trim() }));
    },
    []
  );

  const handleChangeCheckPassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCheckPassword((prev) => ({ ...prev, text: e.target.value.trim() }));
    },
    []
  );

  const handleSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.text !== checkPassword.text) {
      setPassword((prev) => ({ ...prev, isValid: false }));
      setCheckPassword((prev) => ({ ...prev, isValid: false }));
      setMessage(USER_VALIDATION_ERRORS.INVALID_CHECKPASSWORD);
      return;
    }

    const {
      status,
      data: statusMessage,
      token,
    } = await authApi.postSignUp({
      email: email.text,
      password: password.text,
    });

    if (status) {
      setMessage("");
      setEmail((prev) => ({ ...prev, isValid: true }));
      setPassword((prev) => ({ ...prev, isValid: true }));
      setCheckPassword((prev) => ({ ...prev, isValid: true }));

      setTimeout(() => {
        alert("회원가입이 완료되었습니다!");
        navigate("/auth", { replace: true });
      }, 200);
    } else {
      setMessage(statusMessage);
      setEmail((prev) => ({ ...prev, isValid: false }));
      setPassword((prev) => ({ ...prev, isValid: false }));
      setCheckPassword((prev) => ({ ...prev, isValid: false }));
    }
  };

  return (
    <form onSubmit={handleSubmitSignUp}>
      <div>
        <div>
          <InputLabelForm
            labelText="Email"
            type="text"
            placeholder="email"
            value={email.text}
            onChange={handleChangeEmail}
            className={`border-[3px]  ${
              email.isValid
                ? "hover:border-blue-500/50 focus:border-blue-500"
                : "border-red-500"
            }`}
          />
          <InputLabelForm
            labelText="Password"
            type="password"
            placeholder="password"
            value={password.text}
            onChange={handleChangePassword}
            className={`border-[3px]  ${
              password.isValid
                ? "hover:border-blue-500/50 focus:border-blue-500"
                : "border-red-500"
            }`}
          />
          <InputLabelForm
            labelText="Check Password"
            type="password"
            placeholder="password"
            value={checkPassword.text}
            onChange={handleChangeCheckPassword}
            className={`border-[3px]  ${
              checkPassword.isValid
                ? "hover:border-blue-500/50 focus:border-blue-500"
                : "border-red-500"
            }
            `}
          />
          <InputMessage message={message} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-sm mt-8 ">
        Sign Up
      </button>
    </form>
  );
};

export default memo(SignUpForm);
