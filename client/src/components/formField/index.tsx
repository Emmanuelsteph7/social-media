import React, { useId } from "react";
// import "./formField.css";

interface Props {
  label?: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<Props> = ({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
}) => {
  const id = useId();
  return (
    <div data-testid="formField" className="flex flex-col mb-6">
      {label && (
        <label
          className="mb-1 font-semibold text-base text-offWhite"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className="p-3 bg-primary text-white focus:text-primary focus:bg-offWhite focus:focus-ring-primary rounded outline-none duration-200"
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && (
        <span
          data-testid="formField-error"
          className="text-danger mt-1 text-xs"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;
