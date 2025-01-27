const Button = ({ children, className, type, onClick, disabled }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label="On Click"
    >
      <h6>{children}</h6>
    </button>
  );
};
export default Button;
