import { useState } from "react";
import propTypes from "prop-types";
import ic_password_hide from "assets/icons/ic_password_hide.svg";
import ic_password_show from "assets/icons/ic_password_show.svg";

const InputPassword = (props) => {
  const { value, placeholder, name, inputClassName, required, disabled } =
    props;

  const [visibilityPassowrd, setVsibilityPassowrd] = useState("password");
  const [hasError, setHasError] = useState(null);

  const onChange = (e) => {
    const target = {
      target: {
        name,
        value: e.target.value,
      },
    };

    props.onChange(target);
  };

  return (
    <div>
      <div className={["card card-form relative", inputClassName].join(" ")}>
        <input
          className="w-full outline-none"
          id={name}
          name={name}
          type={visibilityPassowrd}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={onChange}
        />
        <div className="absolute top-1/4 right-5 cursor-pointer">
          {visibilityPassowrd === "text" && (
            <img
              title="Hide Password"
              alt="Hide Password"
              onClick={() => setVsibilityPassowrd("password")}
              src={ic_password_hide}
            />
          )}

          {visibilityPassowrd === "password" && (
            <img
              title="Show Password"
              alt="Show Password"
              onClick={() => setVsibilityPassowrd("text")}
              src={ic_password_show}
            />
          )}
        </div>
      </div>
      {/* <div className={["relative z-0", inputClassName].join(" ")}>
        <input
          id={name}
          name={name}
          type={visibilityPassowrd}
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={`peer block w-full appearance-none border-0 border-b-2 border-green bg-transparent py-2.5 px-0 pr-8 text-base text-gray-900 transition placeholder-shown:border-accent-gray focus:border-green focus:outline-none focus:ring-0  ${
            hasError && "border-red focus:border-red"
          }`}
          placeholder=" "
        />
        <label
          htmlFor={name}
          className={`absolute top-3 left-3  -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-green duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-accent-gray peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green ${
            hasError && "text-red peer-focus:text-red"
          }`}
        >
          {placeholder}
        </label>

        <div className="absolute top-1/4 right-0 cursor-pointer">
          {visibilityPassowrd === "text" && (
            <img
              title="Hide Password"
              alt="Hide Password"
              onClick={() => setVsibilityPassowrd("password")}
              src={ic_password_hide}
            />
          )}

          {visibilityPassowrd === "password" && (
            <img
              title="Show Password"
              alt="Show Password"
              onClick={() => setVsibilityPassowrd("text")}
              src={ic_password_show}
            />
          )}
        </div>
      </div> */}

      {hasError && <span className="mt-1 text-sm text-red">{hasError}</span>}
    </div>
  );
};

export default InputPassword;

InputPassword.defaultProps = {
  placeholder: "Please type here..",
  required: true,
  disabled: false,
};

InputPassword.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.oneOfType([propTypes.string, propTypes.element]),
  inputClassName: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
};
