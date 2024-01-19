import { useState } from "react";
import propTypes from "prop-types";
import OtpInput from "react18-input-otp";
import Countdown from "react-countdown";
import toast from "react-hot-toast";

const InputOtp = (props) => {
  const { value, numInputs, email } = props;

  const [time, setTime] = useState(Date.now() + 5 * 60 * 1000);

  const handleChange = (value) => {
    props.onChange(value);

    if (value.length === numInputs) props.onComplete(value);
  };

  const renderer = ({ minutes, seconds }) => {
    return (
      <>
        {minutes}:{seconds}
      </>
    );
  };

  const resend = () => {
    setTime(Date.now() + 5 * 60 * 1000);
    toast.success(
      <span>
        Kode OTP berhasil dikirim!
        <i className="text-en">OTP code sent successfully!</i>
      </span>
    );
    props.onResend();
  };

  return (
    <div>
      <OtpInput
        value={value}
        onChange={handleChange}
        numInputs={numInputs}
        separator={<span className="mx-3"></span>}
        containerStyle="justify-center"
        inputStyle="md:text-[5rem] lg:!w-[125px] outline-none card rounded-2xl"
      />

      <div className="mt-8 items-center justify-between lg:flex">
        <span className="text-xl font-medium">{email}</span>

        <div className="flex items-center gap-3">
          <span>
            <Countdown date={time} renderer={renderer} />
          </span>
          |
          <span
            onClick={resend}
            className="cursor-pointer font-medium text-primary-yellow"
          >
            Kirim Ulang
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputOtp;

InputOtp.defaultProps = {
  numInputs: 6,
};

InputOtp.propTypes = {
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  onComplete: propTypes.func.isRequired,
  onResend: propTypes.func.isRequired,
  numInputs: propTypes.number,
  email: propTypes.string,
};
