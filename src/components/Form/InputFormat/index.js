import { useState } from "react";
import propTypes from "prop-types";
import { templateFormatter, templateParser, parseDigit } from "input-format";
import ReactInput from "input-format/react";

const InputFormat = (props) => {
  const {
    name,
    prepend,
    template,
    placeholder,
    value,
    inputClassName,
    onDelete,
    errorResponse,
    required,
    disabled,
  } = props;

  const [hasError, setHasError] = useState(null);

  const onChange = (value) => {
    if (value.length !== template.split(" - ").join("").length)
      setHasError(errorResponse);
    else setHasError(null);

    props.onChange(value);
  };

  return (
    <div>
      {/* <div className={["relative z-0", inputClassName].join(" ")}>
        <ReactInput
          id={name}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          onChange={(value) => onChange(value)}
          format={templateFormatter(template)}
          parse={templateParser(template, parseDigit)}
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
      </div> */}

      <ReactInput
        className={["card card-form", inputClassName].join(" ")}
        id={name}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(value) => onChange(value)}
        format={templateFormatter(template)}
        parse={templateParser(template, parseDigit)}
        placeholder={placeholder}
      />

      {hasError && (
        <span className="mt-3 block text-sm text-red">{hasError}</span>
      )}
    </div>
  );
};

export default InputFormat;

InputFormat.defaultProps = {
  placeholder: "Please type here..",
  errorResponse: (
    <>
      Harap cocokkan dengan format yang diminta.
      <i className="text-en">Please match the requested format.</i>
    </>
  ),
  required: true,
  disabled: false,
};

InputFormat.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.oneOfType([propTypes.string, propTypes.element])
    .isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  inputClassName: propTypes.string,
  template: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
};
