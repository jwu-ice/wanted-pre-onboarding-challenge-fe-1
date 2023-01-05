import { InputHTMLAttributes, memo } from "react";

type InputLabelFormProps = {
  labelText: string;
  className?: string;
  labelClassName?: string;
  contentDirection?: "col";
};

/**
 *  @props className -> input style
 *  @props labelClassName -> label style
 */
const InputLabelForm = ({
  className,
  labelText,
  contentDirection,
  labelClassName,
  ...props
}: InputLabelFormProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "className">) => {
  return (
    <div
      className={`form-control ${
        contentDirection === "col" && "flex-col"
      } ${labelClassName}`}
    >
      <label className="label">
        <span className="label-text">{labelText}</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          className={`input input-bordered w-full ${className}`}
          {...props}
        />
      </label>
    </div>
  );
};

export default memo(InputLabelForm);
