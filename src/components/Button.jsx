const Button = ({ className, href, onClick, children }) => {
  const classes = ` ${className || ""}`;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <button className={classes}>{children}</button>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
