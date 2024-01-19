import propTypes from "prop-types";

// assets
import ic_pencil_yellow from "assets/icons/ic_pencil_yellow.svg";

const Edit = (props) => {
  const { isSmall } = props;

  return (
    <div
      title="Edit"
      onClick={props.onClick}
      className={`flex cursor-pointer items-center justify-center rounded-[5px] bg-[#F4AE0036] transition duration-300 hover:opacity-80 ${
        isSmall ? "h-[40px] w-[40px]" : "h-[45px] w-[45px]"
      }`}
    >
      <img src={ic_pencil_yellow} alt="Icon Pencil" />
    </div>
  );
};

export default Edit;

Edit.defaultProps = {
  isSmall: false,
};

Edit.propTypes = {
  onClick: propTypes.func.isRequired,
  isSmall: propTypes.bool,
};
