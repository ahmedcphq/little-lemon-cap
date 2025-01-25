const Button = ({ children, className, type }) => {
  return (
    <button type={type} className={className}>
      <h6>{children}</h6>
    </button>
  );
};
export default Button;
