import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import Modal from "components/Modal";
import Button from "components/Button";

// assets
import CinéTix from "assets/images/CinéTix.png";
import profile from "assets/images/profile.png";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    id: "",
    name: "",
    job: "",
    message: "",
    image: null,
    method: "POST",
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      {" "}
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
          <a
            href="#"
            className="hover:text-blue-500 mr-5"
            onClick={() => setShowModal(true)}
          >
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
      <Modal
        name="Ulasan Pelanggan"
        showModal={showModal}
        setShowModal={(value) => setShowModal(value)}
        body={
          <>
            <form action="#" method="POST">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Nama
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan Nama"
                    required
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Alamat Email
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Masukkan Alamat Email"
                    required
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="complaint"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Keluhan
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="complaint"
                    name="complaint"
                    placeholder="Masukkan Keluhan"
                    required
                    rows={5}
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              <Button type="submit" isBlock isPrimary>
                Kirim
              </Button>
            </form>
          </>
        }
      />
    </>
  );
};

export default Navbar;
