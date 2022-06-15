import React, { useId } from "react";
import cs from "classnames";
// import "./formField.css";

interface Props {
  label?: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  className?: string;
  cols?: number;
  rows?: number;
}

const FormField: React.FC<Props> = ({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
  placeholder,
  className,
  cols,
  rows = 5,
}) => {
  const id = useId();
  const rootClasses = cs("flex flex-col", {
    [`${className}`]: className,
  });
  return (
    <div data-testid="formField" className={rootClasses}>
      {label && (
        <label
          className="mb-1 font-semibold text-base text-offWhite"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        className="p-3 bg-primary text-white focus:text-primary focus:bg-offWhite focus:focus-ring-primary rounded outline-none duration-200"
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
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
