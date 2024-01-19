import propTypes from "prop-types";

const Min = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[15px] bg-red transition duration-300 hover:opacity-80"
    >
      <svg
        width="24"
        height="6"
        viewBox="0 0 24 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3L21 3"
          stroke="white"
          strokeWidth="4.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Min;

Min.propTypes = {
  onClick: propTypes.func.isRequired,
};
