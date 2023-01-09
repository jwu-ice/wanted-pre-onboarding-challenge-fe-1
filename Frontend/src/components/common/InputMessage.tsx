import { ComponentProps, HTMLAttributes, memo } from "react";

type InputMessageProps = {
  message: string;
  className?: Pick<HTMLAttributes<HTMLDivElement>, "className">;
} & Omit<ComponentProps<"div">, "children">;

const InputMessage = ({ message, className }: InputMessageProps) => {
  return (
    <div className={`absolute text-red-500 mt-1 ${className}`}>{message}</div>
  );
};

export default memo(InputMessage);
