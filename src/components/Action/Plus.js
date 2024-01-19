import propTypes from "prop-types";

const Plus = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[15px] bg-green transition duration-300 hover:opacity-80"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12L21 12"
          stroke="white"
          strokeWidth="4.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3V21"
          stroke="white"
          strokeWidth="4.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Plus;

Plus.propTypes = {
  onClick: propTypes.func.isRequired,
};
