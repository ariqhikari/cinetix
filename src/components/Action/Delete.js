import propTypes from "prop-types";

// assets
import ic_trash from "assets/icons/ic_trash.svg";

const Delete = (props) => {
  return (
    <div
      title="Delete"
      onClick={props.onClick}
      className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-[5px] bg-[#F3787836] transition duration-300 hover:opacity-80"
    >
      <img src={ic_trash} alt="Icon Trash" />
    </div>
  );
};

export default Delete;

Delete.propTypes = {
  onClick: propTypes.func.isRequired,
};
