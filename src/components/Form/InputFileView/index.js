import propTypes from "prop-types";
import Button from "components/Button";

const InputFileView = (props) => {
  const { value } = props;

  return (
    <div className={["card card-form !justify-between !py-0 !px-5"].join(" ")}>
      <span>{value}</span>
      <Button className="my-3 !rounded-lg !py-1" isSecondary>
        Lihat File
      </Button>
    </div>
  );
};

export default InputFileView;

InputFileView.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.object,
};
