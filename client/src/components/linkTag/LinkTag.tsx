import { ReactNode } from "react";
import { Link } from "react-router-dom";
import cs from "classnames";

interface Props {
  to: string;
  externalLink?: string;
  className?: string;
  children: JSX.Element | ReactNode;
  removeHover?: boolean;
}

const LinkTag: React.FC<Props> = ({
  className,
  to,
  children,
  externalLink,
  removeHover,
  ...rest
}) => {
  const classes = cs("duration-200", {
    [`${className}`]: className,
    "hover:text-primary": !removeHover,
  });
  return (
    <Link
      className={classes}
      to={externalLink ? { pathname: externalLink } : to}
      target={externalLink ? "_blank" : "_self"}
      {...rest}
    >
      {children}
    </Link>
  );
};
export default LinkTag;
