import { useState } from "react";
import propTypes from "prop-types";

// assets
import ic_close from "assets/icons/ic_close.svg";
import ic_hand_right_black from "assets/icons/ic_hand_right_black.svg";

const InputText = (props) => {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    hint,
    inputClassName,
    hintClassName,
    onDelete,
    errorResponse,
    required,
    disabled,
    icRemove,
  } = props;

  const [hasError, setHasError] = useState(null);

  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (e) => {
    const target = {
      target: {
        name,
        value: e.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(e.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    props.onChange(target);
  };

  return (
    <div>
      <input
        className={["card card-form", inputClassName].join(" ")}
        id={name}
        name={name}
        type={type == "number" ? type : "text"}
        maxLength={type == "number" ? 15 : null}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />

      {/* <div className={["relative z-0", inputClassName].join(" ")}>
        <input
          id={name}
          name={name}
          type={type == "number" ? "text" : type}
          maxLength={type == "number" ? 15 : null}
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={`peer block w-full appearance-none border-0 border-b-2 border-green bg-transparent py-2.5 px-0 pr-8 text-base text-gray-900 transition placeholder-shown:border-accent-gray focus:border-green focus:outline-none focus:ring-0 ${
            prepend && "pl-[4.25rem]"
          } ${hasError && "border-red focus:border-red"}`}
          placeholder=" "
        />

        {prepend && (
          <div className="absolute top-2.5 left-3  flex items-center">
            {prepend}
            <svg
              className="mx-3"
              width="2"
              height="20"
              viewBox="0 0 2 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="20" fill="#191919" fillOpacity="0.2" />
            </svg>
          </div>
        )}

        <label
          htmlFor={name}
          className={`absolute top-3 left-3  -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-green duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-accent-gray peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green ${
            prepend &&
            "peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-16  peer-focus:top-3 peer-focus:left-3"
          } ${hasError && "text-red peer-focus:text-red"}`}
        >
          {placeholder}
        </label>

        {value.length > 0 && icRemove ? (
          <span></span>
        ) : value.length && !icRemove ? (
          <button
            title="Submit"
            type="submit"
            className={`absolute top-[10%] right-0 cursor-pointer rounded-full p-1`}
          >
            <img src={ic_hand_right_black} alt="Icon Hand Right" />
          </button>
        ) : (
          ""
        )}
      </div> */}

      {hasError && (
        <span className="mt-2 block text-sm text-red">{hasError}</span>
      )}

      {hint && (
        <span
          className={[
            "mt-1 block text-sm italic text-primary-yellow",
            hintClassName,
          ].join(" ")}
        >
          {hint}
        </span>
      )}
    </div>
  );
};

export default InputText;

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here..",
  errorResponse: (
    <>
      Harap cocokkan dengan format yang diminta.
      <i className="text-en">Please match the requested format.</i>
    </>
  ),
  required: true,
  disabled: false,
  icRemove: true,
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  onDelete: propTypes.func,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.oneOfType([propTypes.string, propTypes.element]),
  hint: propTypes.element,
  inputClassName: propTypes.string,
  hintClassName: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
  icRemove: propTypes.bool,
};
