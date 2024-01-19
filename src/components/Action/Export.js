import { useSearchParams } from "react-router-dom";
import propTypes from "prop-types";

// services
import { exportStudentRequirementById } from "services/Requirement/Prodi";

// assets
import ic_download from "assets/icons/ic_download.svg";

const Export = (props) => {
  const { isSmall } = props;
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick = async () => {
    const response = await exportStudentRequirementById(searchParams.get("rqm-id"), searchParams.get("id"));
    window.open(`${process.env.REACT_APP_STORAGE}excels/${response.data.body.data.file}`, '_blank');
  }

  return (
    <div
      title="Export"
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center rounded-[5px] bg-[#59CE8F36] transition duration-300 hover:opacity-80 ${
        isSmall ? "h-[40px] w-[40px]" : "h-[45px] w-[45px]"
      }`}
    >
      <img src={ic_download} alt="Icon Download" />
    </div>
  );
};

export default Export;

Export.defaultProps = {
  isSmall: false,
};

Export.propTypes = {
  isSmall: propTypes.bool,
};
