import cs from "classnames";
import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";

interface Props {
  fullWidth?: boolean;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "primary-outline"
    | "secondary-outline"
    | "tertiary-outline";
}

type MainBtnProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>;
type BtnLinkProps = Props & LinkProps;
type MergedProps = Omit<BtnLinkProps & MainBtnProps, "to">;
type ButtonProps = {
  as?: "button" | "link";
  to?: string;
} & MergedProps;

const Button: React.FC<ButtonProps> = ({
  as = "button",
  to = "/",
  ...props
}) => {
  return (
    <>
      {as === "link" ? <BtnLink to={to} {...props} /> : <MainBtn {...props} />}
    </>
  );
};

/** this is the main button component */
const MainBtn: React.FC<MainBtnProps> = ({
  children,
  variant = "primary",
  className,
  disabled,
  fullWidth,
  loading,
  ...props
}) => {
  const classes = cs("rounded py-4 px-4 border outline-none", {
    [`${className}`]: className,
    "bg-primary text-white border-primary focus:focus-ring-primary":
      variant === "primary",
    "bg-secondary text-white border-secondary focus:focus-ring-secondary":
      variant === "secondary",
    "bg-tertiary text-white border-tertiary focus:focus-ring-tertiary":
      variant === "tertiary",
    "bg-white text-primary border-primary focus:focus-ring-primary":
      variant === "primary-outline",
    "bg-white text-secondary border-secondary focus:focus-ring-secondary":
      variant === "secondary-outline",
    "bg-white text-tertiary border-tertiary focus:focus-ring-tertiary":
      variant === "tertiary-outline",
    "w-full": fullWidth,
    "cursor-not-allowed opacity-60": disabled,
    "cursor-not-allowed opacity-60 flex justify-center items-center": loading,
  });
  return (
    <button
      disabled={disabled || loading}
      data-testid="button"
      className={classes}
      {...props}
    >
      {loading && (
        <span className="mr-2 animate-spin">
          <AiOutlineReload />
        </span>
      )}
      {children}
    </button>
  );
};

/** this is the a link component that looks like a btn component */
const BtnLink: React.FC<BtnLinkProps> = ({
  children,
  variant = "primary",
  className,
  disabled,
  fullWidth,
  ...props
}) => {
  const classes = cs("rounded py-2 px-6 border", {
    [`${className}`]: className,
    "bg-primary text-white border-primary": variant === "primary",
    "bg-secondary text-white border-secondary": variant === "secondary",
    "bg-tertiary text-white border-tertiary": variant === "tertiary",
    "bg-white text-primary border-primary": variant === "primary-outline",
    "bg-white text-secondary border-secondary": variant === "secondary-outline",
    "bg-white text-tertiary border-tertiary": variant === "tertiary-outline",
    "w-full": fullWidth,
    "cursor-not-allowed": disabled,
  });
  return (
    <Link data-testid="button" className={classes} {...props}>
      {children}
    </Link>
  );
};

export default Button;
