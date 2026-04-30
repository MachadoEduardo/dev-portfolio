type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  download = false,
}: ButtonProps) {
  const styles = `dev-button dev-button--${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}