import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

function ButtonLink({
  children,
  className = "",
  ...props
}: ButtonProps & { variant: "solid" | "outline" }) {
  const { variant, ...linkProps } = props;
  const variantClasses =
    variant === "solid"
      ? "!border-[var(--primary)] !bg-[var(--primary)] !text-white hover:brightness-90"
      : "!border-[var(--primary)] !bg-white !text-[var(--primary)] hover:!bg-[#f6f1e6]";

  return (
    <a
      {...linkProps}
      className={`button-${variant} inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 font-semibold shadow-sm transition-all ${variantClasses} ${className}`.trim()}
    >
      {children}
    </a>
  );
}

export function SolidButton(props: ButtonProps) {
  return <ButtonLink {...props} variant="solid" />;
}

export function OutlineButton(props: ButtonProps) {
  return <ButtonLink {...props} variant="outline" />;
}
