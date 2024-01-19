import { useState } from "react";
import propTypes from "prop-types";

const InputTextArea = (props) => {
  const {
    value,
    placeholder,
    name,
    inputClassName,
    errorResponse,
    required,
    disabled,
  } = props;

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
      <textarea
        id={name}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={onChange}
        // className={`focus:border-gray-500 peer block min-h-[100px] w-full appearance-none rounded-[10px] border-2 border-transparent bg-[#D9D9D933] px-2.5 pt-5 pb-2 text-base font-medium text-black transition placeholder-shown:pt-3 focus:pt-5 focus:outline-none focus:ring-0 ${
        //   hasError && "border-red focus:border-red"
        // }`}
        className={["card card-form", inputClassName].join(" ")}
        placeholder={placeholder}
      ></textarea>

      {hasError && (
        <span className="mt-1 block text-sm text-red">{hasError}</span>
      )}
    </div>
  );
};

export default InputTextArea;

InputTextArea.defaultProps = {
  placeholder: "Please type here..",
  errorResponse: "Please match the requested format.",
  required: true,
  disabled: false,
};

InputTextArea.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.oneOfType([propTypes.string, propTypes.element]),
  inputClassName: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
};
