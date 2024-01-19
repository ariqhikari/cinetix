import { useState, useEffect } from "react";
import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  isEqual,
  getDaysInMonth,
  getDay,
} from "date-fns";
import propTypes from "prop-types";

// assets
import ic_calendar_small from "assets/icons/ic_calendar_small.svg";
import moment from "moment";

const InputDate = (props) => {
  const {
    value,
    placeholder,
    name,
    inputClassName,
    required,
    disabled,
    isSmall,
  } = props;

  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [dayCount, setDayCount] = useState([]);
  const [blankDays, setBlankDays] = useState([]);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
  const [type, setType] = useState("date");

  const decrement = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => subYears(prev, 1));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const increment = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => addMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => addYears(prev, 1));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
    }
  };

  const isToday = (date) => {
    return value
      ? isEqual(
          new Date(moment(value).year(), moment(value).month(), date),
          value
        )
      : false;
  };

  const setDateValue = (date) => () => {
    props.onChange(
      new Date(
        datepickerHeaderDate.getFullYear(),
        datepickerHeaderDate.getMonth(),
        date
      )
    );
    setShowDatepicker(false);
  };

  const getDayCount = (date) => {
    let daysInMonth = getDaysInMonth(date);

    // find where to start calendar day of week
    let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setDayCount(daysArray);
  };

  const isSelectedMonth = (month) => {
    return value
      ? isEqual(new Date(value.getFullYear(), month, value.getDate()), value)
      : false;
  };

  const setMonthValue = (month) => () => {
    setDatepickerHeaderDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        month,
        datepickerHeaderDate.getDate()
      )
    );
    setType("date");
  };

  const toggleDatepicker = () => setShowDatepicker((prev) => !prev);

  const showMonthPicker = () => setType("month");

  const showYearPicker = () => setType("date");

  useEffect(() => {
    getDayCount(datepickerHeaderDate);
  }, [datepickerHeaderDate]);

  return (
    <div className="relative">
      <input type="hidden" />

      <input
        id={name}
        type="text"
        readOnly
        // className="focus:shadow-outline w-full cursor-pointer rounded-lg py-3 pl-4 pr-10 font-medium leading-none text-accent-gray shadow-sm focus:outline-none"
        className={["card card-form", inputClassName].join(" ")}
        placeholder={placeholder}
        value={value && moment(value).format("DD/MM/yyy")}
        onClick={toggleDatepicker}
      />
      <div
        className="absolute top-1.5 right-2 cursor-pointer px-3 py-2"
        onClick={toggleDatepicker}
      >
        <img src={ic_calendar_small} alt="Icon Calendar" />
      </div>

      {showDatepicker && (
        <div
          className="absolute top-0 left-0 z-50 mt-12 rounded-lg bg-white p-4 shadow"
          style={{ width: "17rem" }}
        >
          <div className="mb-2 flex items-center justify-between">
            <div>
              <button
                type="button"
                className="hover:bg-gray-200 inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out"
                onClick={decrement}
              >
                <svg
                  className="inline-flex h-6 w-6 text-accent-gray"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            {type === "date" && (
              <div
                onClick={showMonthPicker}
                className="text-gray-800 hover:bg-gray-200 flex-grow cursor-pointer rounded-lg p-1 text-lg font-bold"
              >
                <p className="text-center">
                  {format(datepickerHeaderDate, "MMMM")}
                </p>
              </div>
            )}
            <div
              onClick={showYearPicker}
              className="text-gray-800 hover:bg-gray-200 flex-grow cursor-pointer rounded-lg p-1 text-lg font-bold"
            >
              <p className="text-center">
                {format(datepickerHeaderDate, "yyyy")}
              </p>
            </div>
            <div>
              <button
                type="button"
                className="hover:bg-gray-200 inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out"
                onClick={increment}
              >
                <svg
                  className="inline-flex h-6 w-6 text-accent-gray"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {type === "date" && (
            <>
              <div className="-mx-1 mb-3 flex flex-wrap">
                {DAYS.map((day, i) => (
                  <div key={i} style={{ width: "14.26%" }} className="px-1">
                    <div className="text-gray-800 text-center text-xs font-medium">
                      {day}
                    </div>
                  </div>
                ))}
              </div>
              <div className="-mx-1 flex flex-wrap">
                {blankDays.map((_, i) => (
                  <div
                    key={i}
                    style={{ width: "14.26%" }}
                    className="border border-transparent p-1 text-center text-sm"
                  ></div>
                ))}
                {dayCount.map((d, i) => (
                  <div
                    key={i}
                    style={{ width: "14.26%" }}
                    className="mb-1 px-1"
                  >
                    <div
                      onClick={setDateValue(d)}
                      className={`cursor-pointer rounded-full text-center text-sm leading-loose transition duration-100 ease-in-out ${
                        isToday(d)
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-200"
                      }`}
                    >
                      {d}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {type === "month" && (
            <div className="-mx-1 flex flex-wrap">
              {Array(12)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    onClick={setMonthValue(i)}
                    style={{ width: "25%" }}
                  >
                    <div
                      className={`hover:bg-gray-200 cursor-pointer rounded-lg p-5 text-center text-sm font-semibold ${
                        isSelectedMonth(i)
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-200"
                      }`}
                    >
                      {format(
                        new Date(
                          datepickerHeaderDate.getFullYear(),
                          i,
                          datepickerHeaderDate.getDate()
                        ),
                        "MMM"
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputDate;

InputDate.defaultProps = {
  placeholder: "Please type here..",
  required: true,
  disabled: false,
  isSmall: false,
};

InputDate.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.oneOfType([propTypes.string, propTypes.element]),
  inputClassName: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
  isSmall: propTypes.bool,
};
