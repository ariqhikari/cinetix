import propTypes from "prop-types";

// assets
import ic_eye from "assets/icons/ic_eye.svg";

const Detail = (props) => {
  return (
    <div
      title="Detail"
      onClick={props.onClick}
      className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-[5px] bg-[#F4AE0036] transition duration-300 hover:opacity-80"
    >
      <img src={ic_eye} alt="Icon Eye" />
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  onClick: propTypes.func.isRequired,
};
