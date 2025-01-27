const Button = ({ children, className, type, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <h6>{children}</h6>
    </button>
  );
};
export default Button;
