import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router";

// features
import { VerifyUser } from "features/authSlice";

const Default = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    if (!user && !isRequested) {
      getUser();
      setIsRequested(true);
    }
  }, [user, isRequested]);

  const getUser = () => {
    dispatch(VerifyUser());
  };

  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default Default;
