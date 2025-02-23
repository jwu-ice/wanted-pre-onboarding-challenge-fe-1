import { MouseEventHandler } from "react";

type PlusButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const PlusButton = ({ onClick }: PlusButtonProps) => {
  return (
    <button onClick={onClick} className="btn btn-circle btn-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
};

export default PlusButton;
