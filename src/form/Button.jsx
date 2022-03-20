const Button = ({ children, disabled, className }) => {
  return (
    <button
      className={`w-full p-5 mt-2 text-center text-white bg-blue-500 rounded-lg outline-none cursor-pointer md:text-xl ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
