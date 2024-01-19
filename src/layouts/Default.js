import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router";

// features
import { VerifyUser } from "features/authSlice";

const Default = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const { user } = useSelector((state) => state.auth);
  const [isRequested, setIsRequested] = useState(false);

  // useEffect(() => {
  //   if (!user && !isRequested) {
  //     getUser();
  //     setIsRequested(true);
  //   }
  // }, [user, isRequested]);

  // const getUser = () => {
  //   dispatch(VerifyUser()).then(({ payload }) => {
  //     if (typeof payload != "string") {
  //       // Check role
  //       const role = payload.role.name;
  //       if (role === "Mahasiswa" && !location.pathname.includes("mahasiswa"))
  //         navigate("/mahasiswa");
  //       else if (role === "Dosen" && !location.pathname.includes("dosen"))
  //         navigate("/dosen");
  //       else if (role === "Prodi" && !location.pathname.includes("prodi"))
  //         navigate("/prodi");
  //       else if (
  //         role === "Administrator" &&
  //         !location.pathname.includes("admin")
  //       )
  //         navigate("/admin");
  //     }
  //   });
  // };

  return <Outlet />;
};

export default Default;
