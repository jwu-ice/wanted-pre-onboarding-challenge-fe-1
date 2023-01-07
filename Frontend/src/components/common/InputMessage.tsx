import { HTMLAttributes } from "react";

type InputMessageProps = {
  message: string;
  className?: HTMLAttributes<"className">;
};

const InputMessage = ({ message, className }: InputMessageProps) => {
  return (
    <div className={`absolute text-red-500 mt-1 ${className}`}>{message}</div>
  );
};

export default InputMessage;
