import React, { useState } from "react";
import CinéTix from "assets/images/CinéTix.png";
import profile from "assets/images/profile.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-gray-800 text-black">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={CinéTix} alt="Logo" className="mr-5 h-8" />
        </div>
        <div className="flex items-center">
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
    </div>
  );
};

export default Navbar;
