import propTypes from "prop-types";

// assets
import ic_chevron_down from "assets/icons/ic_chevron_down.svg";

const InputSelect = (props) => {
  const {
    value,
    name,
    append,
    fields,
    placeholder,
    inputClassName,
    required,
    disabled,
    isSmall,
  } = props;

  if (isSmall) {
    return (
      <>
        <div
          className={[
            "relative z-0 w-full overflow-hidden",
            inputClassName,
          ].join(" ")}
        >
          <select
            id={name}
            name={name}
            value={value}
            required={required}
            disabled={disabled}
            onChange={props.onChange}
            className={`block w-full appearance-none rounded-lg border-2 border-transparent bg-white p-2.5 text-sm text-black outline-none transition placeholder:text-accent-gray focus:border-primary-yellow ${
              append && "pr-8"
            }`}
          >
            {fields.map((field, index) => (
              <option value={field.value} key={`${field.name}-${index}`}>
                {field.name}
              </option>
            ))}
          </select>
          {append && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {append}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    // <div className={[inputClassName].join(" ")}>
    //   <div className="relative z-0 overflow-hidden">
    //     <select
    //       id={name}
    //       name={name}
    //       value={value}
    //       required={required}
    //       disabled={disabled}
    //       onChange={props.onChange}
    //       className={`peer block w-full appearance-none rounded-[10px] border-2 border-transparent bg-[#D9D9D933] px-2.5 pt-5 pb-2 text-base font-medium text-black transition placeholder-shown:pt-3 focus:border-gray-500 focus:pt-5 focus:outline-none focus:ring-0 ${
    //         append && "pr-8"
    //       }`}
    //       placeholder=" "
    //     >
    //       {fields.map((field, index) => (
    //         <option
    //           value={field.value}
    //           key={`${field.name}-${index}`}
    //           disabled={field.disabled}
    //         >
    //           {field.name}
    //         </option>
    //       ))}
    //     </select>

    //     <label
    //       htmlFor={name}
    //       className={`absolute top-3 left-3 -z-10 origin-[0] -translate-y-2 scale-75 transform text-base text-accent-gray duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-accent-gray`}
    //     >
    //       {placeholder}
    //     </label>

    //     {append && (
    //       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-accent-black">
    //         {append}
    //       </div>
    //     )}
    //   </div>
    // </div>
    // <div className="relative z-0 overflow-hidden">
    <select
      id={name}
      name={name}
      value={value}
      required={required}
      disabled={disabled}
      onChange={props.onChange}
      className={[inputClassName, `card card-form ${append && "pr-8"}`].join(
        " "
      )}
      placeholder=" "
    >
      {fields.map((field, index) => (
        <option
          value={field.value}
          key={`${field.name}-${index}`}
          disabled={field.disabled}
        >
          {field.name}
        </option>
      ))}
    </select>
    //   {/* {append && (
    //   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-accent-black">
    //     {append}
    //   </div>
    // )} */}
    // </div>
  );
};

export default InputSelect;

InputSelect.defaultProps = {
  placeholder: "Please type here..",
  required: true,
  disabled: false,
  isSmall: false,
  append: <img src={ic_chevron_down} alt="Icon Chevron Down" />,
};

InputSelect.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  fields: propTypes.arrayOf(Object).isRequired,
  append: propTypes.element,
  placeholder: propTypes.oneOfType([propTypes.string, propTypes.element]),
  inputClassName: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
  isSmall: propTypes.bool,
};
