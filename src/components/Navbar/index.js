import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

// services
import { confirmModal } from "services/general";
import { reset } from "features/authSlice";

// components
import Button from "components/Button";

// assets
import CinéTix from "assets/images/CinéTix.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    confirmModal().then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        dispatch(reset());
        localStorage.removeItem("token");
        toast.success("Logout success");
        toggleDropdown();
      }
    });
  };

  return (
    <>
      <header className="mx-5 mt-5 mb-10 flex items-center justify-between lg:mx-20">
        <div className="flex items-center">
          <Link to="/">
            <img src={CinéTix} alt="Logo" className="mr-5 h-8" />
          </Link>
        </div>
        <div className="hidden items-center md:flex">
          <Link to="/list-film" className="hover:text-blue-500 mr-5">
            Daftar Film
          </Link>
          <Link to="/tiket-saya" className="hover:text-blue-500 mr-5">
            Tiket Saya
          </Link>
          {user ? (
            <img
              src={`${process.env.REACT_APP_STORAGE}avatars/${user.avatar}`}
              alt="Profile"
              className="h-8 cursor-pointer rounded-full"
              onClick={toggleDropdown}
            />
          ) : (
            <Button type="link" href="/login" isPrimary className="!py-2 !px-6">
              Login
            </Button>
          )}
          {showDropdown && (
            <div className="relative z-10 ml-2">
              <div className="bg-gray-700 absolute right-0 mt-2 w-36 rounded p-2 shadow">
                <a href="#" className="block py-1 text-black">
                  Profil Saya
                </a>

                <div className="divider !my-1" />

                <a
                  onClick={() => logout()}
                  className="block cursor-pointer py-1 text-red"
                >
                  Sign Out
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
