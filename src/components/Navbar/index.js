import React, { useState } from "react";
import { Link } from "react-router-dom";

// assets
import CinéTix from "assets/images/CinéTix.png";
import profile from "assets/images/profile.png";
import Review from "pages/Review";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <header className="mx-5 mt-5 mb-10 flex items-center justify-between lg:mx-20">
      <div className="flex items-center">
        <Link to="/">
          <img src={CinéTix} alt="Logo" className="mr-5 h-8" />
        </Link>
      </div>
      <div className="hidden items-center md:flex">
        <a href="#" className="hover:text-blue-500 mr-5">
          Beranda
        </a>
        <a href="#" className="hover:text-blue-500 mr-5">
          Tiket Saya
        </a>
        <a href="#" className="hover:text-blue-500 mr-5">
          Keluhan
        </a>
        <img
          src={profile}
          alt="Profile"
          className="h-8 cursor-pointer rounded-full"
          onClick={toggleDropdown}
        />
        {showDropdown && (
          <div className="relative ml-2">
            <div className="bg-gray-700 absolute right-0 mt-2 rounded p-2 shadow">
              <img
                src={profile}
                alt="Profile"
                className="mb-2 h-8 rounded-full"
              />
              <a href="#" className="block py-1 text-black">
                Edit Profil
              </a>
              <a href="#" className="block py-1 text-black">
                Keluhan
              </a>
              <a href="#" className="block py-1 text-black">
                Sign Out
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
