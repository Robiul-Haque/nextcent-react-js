export const Button = ({ btnTitle, btnClass }) => {
  return (
    <button
      className={
        btnTitle === "Login"
          ? btnClass
          : "bg-[#4caf4f] text-white py-3 px-8 rounded-md"
      }
    >
      {btnTitle}
    </button>
  );
};

export default Button;
