import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  to,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
}
