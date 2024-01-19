import propTypes from "prop-types";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// features
import { CheckNotification } from "features/notificationSlice";

// components
import Breadcrumb from "components/Breadcrumb";

// assets
import ic_sidebar from "assets/icons/ic_sidebar.svg";
import ic_notification from "assets/icons/ic_notification.svg";
import ic_notification_active from "assets/icons/ic_notification_active.svg";
import { toggleSidebar } from "services/general";

const Navbar = (props) => {
  const { title, subtitle, subHeading, isBack, isBreadcrumb } = props;
  const { user } = useSelector((state) => state.auth);
  const { notRead } = useSelector((state) => state.notification);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSlugRole = () => {
    if (user?.role.name == "Mahasiswa") return "mahasiswa";
    else if (user?.role.name == "Dosen") return "dosen";
    else if (user?.role.name == "Prodi") return "prodi";
    else if (user?.role.name == "Administrator") return "admin";
  };

  useEffect(() => {
    dispatch(CheckNotification());
  }, [dispatch]);

  return (
    <>
      <div className="mb-5 flex items-center justify-between gap-5 rounded-[30px] bg-white px-4 py-4 lg:hidden">
        <div
          title="Sidebar"
          className="sidebar-toggle group flex cursor-pointer items-center"
          onClick={toggleSidebar}
        >
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[1.5px] border-[#19191980] transition group-hover:bg-[#F3F3F3]">
            <img src={ic_sidebar} alt="Icon Sidebar" />
          </div>
        </div>

        {user && (
          <Link
            to={`/${getSlugRole()}/notification`}
            title="Notifikasi"
            className="group flex cursor-pointer items-center"
          >
            <span className="mr-3 text-lg font-medium">Notifikasi</span>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[1.5px] border-[#19191980] transition group-hover:bg-[#F3F3F3]">
              <img src={ic_notification} alt="Icon Notification" />
            </div>
          </Link>
        )}
      </div>

      {/* Navbar */}
      <nav
        className={`flex w-full flex-wrap  bg-transparent lg:flex-row lg:flex-nowrap lg:justify-between ${
          subtitle ? "items-center" : "items-start"
        }`}
      >
        {/* Title */}
        <div>
          {title && <h2 className="text-3xl font-semibold">{title}</h2>}
          {subtitle}
          {subHeading}
          {isBack && (
            <div
              onClick={() => navigate(-1)}
              className="mt-3 mb-2 flex w-max cursor-pointer items-center justify-center gap-4 rounded-lg bg-[#C7C7C7] py-2 px-5 text-white transition hover:bg-[#b4b4b4]"
            >
              <svg
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 17L1 9L8 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                Kembali
                <i className="text-en">Back</i>
              </span>
            </div>
          )}
        </div>

        <div className="hidden rounded-[30px] bg-white px-14 py-4 lg:block">
          {user && (
            <Link
              to={`/${getSlugRole()}/notification`}
              title="Notifikasi"
              className="group flex cursor-pointer items-center"
            >
              <span className="mr-3 text-lg font-medium leading-tight">
                Notifikasi <i className="text-en">Notifications</i>
              </span>
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[1.5px] border-[#19191980] transition group-hover:bg-[#F3F3F3]">
                <img
                  src={notRead > 0 ? ic_notification_active : ic_notification}
                  alt="Icon Notification"
                />
              </div>
            </Link>
          )}
        </div>
      </nav>
      {/* End Navbar */}

      {/* Breadcrumb */}
      {isBreadcrumb ? <Breadcrumb /> : <span className="mb-4 block"></span>}
    </>
  );
};

export default Navbar;

Navbar.defaultProps = {
  isBack: true,
  isBreadcrumb: true,
};

Navbar.propTypes = {
  title: propTypes.oneOfType([propTypes.string, propTypes.element]),
  subtitle: propTypes.element,
  subHeading: propTypes.element,
  isBack: propTypes.bool,
  isBreadcrumb: propTypes.bool,
};
