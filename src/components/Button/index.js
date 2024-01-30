import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const className = [props.className];
  let theme = "button";

  if (props.isPrimary) theme += " bg-dark-blue text-yellow text-lg font-medium";
  if (props.isSecondary)
    theme += " bg-white text-gray text-lg font-medium border border-gray";
  if (props.isDanger)
    theme += " bg-[#FF56781A] text-red text-lg font-medium border-2 border-red";
  if (props.isSuccess)
    theme += " bg-[#24FF0026] text-green text-lg font-medium border-2";
  if (props.isInfo) theme += " bg-blue text-accent-black text-lg font-medium";
  if (props.isGray)
    theme +=
      " bg-gray text-accent-black text-lg font-medium border-2 border-accent-black";
  if (props.isBlock) theme += " w-full";

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    return (
      <Link
        to={props.href}
        className={[theme, className].join(" ")}
        onClick={onClick}
      >
        {props.children}
      </Link>
    );
  }

  if (props.isLoading) {
    return (
      <button
        type="button"
        className={[
          theme,
          className,
          "flex items-center !justify-center !text-white",
        ].join(" ")}
        disabled={true}
      >
        <svg
          className="mr-3 h-7 w-7 animate-spin "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Loading...
      </button>
    );
  }

  return (
    <button
      type={props.type}
      className={[theme, className].join(" ")}
      onClick={onClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "submit", "link"]),
  onClick: propTypes.func,
  to: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isDanger: propTypes.bool,
  isSuccess: propTypes.bool,
  isInfo: propTypes.bool,
  isGray: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isBlock: propTypes.bool,
};
