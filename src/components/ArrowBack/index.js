import { useNavigate } from "react-router-dom";
import ic_arrow_left from "assets/icons/ic_arrow_left.svg";

const ArrowBack = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="flex cursor-pointer items-center gap-3"
    >
      <img src={ic_arrow_left} alt="Icon Arrow Left" />
      <span className="text-xl font-medium">Kembali</span>
    </div>
  );
};

export default ArrowBack;
