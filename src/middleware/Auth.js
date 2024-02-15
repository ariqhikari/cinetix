import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

// features
import { VerifyUser } from "features/authSlice";

const AuthorizeUser = ({ children }) => {
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
    dispatch(VerifyUser()).then(({ payload }) => {
      if (typeof payload == "string") {
        navigate("/");
        return;
      }

      // Check role
      const role = payload.role.name;
      if (role === "ADMIN" && !location.pathname.includes("admin"))
        navigate("/admin");
      else navigate("/customer");
    });
  };

  return children;
};

export default AuthorizeUser;
