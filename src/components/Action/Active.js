import propTypes from "prop-types";

const Active = (props) => {
  const { isSmall } = props;

  return (
    <div
      title="Active"
      onClick={props.onClick}
      className={`flex cursor-pointer items-center justify-center rounded-[5px] bg-[#59ce90e0] transition duration-300 hover:opacity-80 ${
        isSmall ? "h-[40px] w-[40px]" : "h-[45px] w-[45px]"
      }`}
    >
      <svg
        width="15"
        height="11"
        viewBox="0 0 15 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.80942 7.92128L12.7466 0.352769C12.9933 0.117589 13.3072 0 13.6883 0C14.0695 0 14.3834 0.117589 14.63 0.352769C14.8767 0.587949 15 0.887268 15 1.25073C15 1.61419 14.8767 1.91351 14.63 2.14869L5.75112 10.6152C5.48206 10.8717 5.16816 11 4.80942 11C4.45067 11 4.13677 10.8717 3.86771 10.6152L0.369955 7.27988C0.123318 7.0447 0 6.74538 0 6.38192C0 6.01846 0.123318 5.71914 0.369955 5.48396C0.616591 5.24879 0.930493 5.1312 1.31166 5.1312C1.69282 5.1312 2.00673 5.24879 2.25336 5.48396L4.80942 7.92128Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Active;

Active.defaultProps = {
  isSmall: false,
  status: false,
};

Active.propTypes = {
  onClick: propTypes.func.isRequired,
  isSmall: propTypes.bool,
  status: propTypes.bool,
};
