import React from "react";
import CinéTix from "assets/images/CinéTix.png";
import github from "assets/images/github.png";
import instagram from "assets/images/instagram.png";
import youtube from "assets/images/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10 border-t-2 border-blue-gray-50 p-8 text-black">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo perusahaan */}
        <div className="mb-4">
          <img src={CinéTix} alt="Company Logo" className="h-12" />
        </div>

        {/* Menu kontak, tentang, partner */}
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Perusahaan</h4>
          <ul className="list-none space-y-4">
            <li>
              <a href="#">Kontak Kami</a>
            </li>
            <li>
              <a href="#">Tentang</a>
            </li>
            <li>
              <a href="#">Partner</a>
            </li>
          </ul>
        </div>

        {/* Menu beranda, bioskop, tiket saya, pembayaran */}
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Menu</h4>
          <ul className="list-none space-y-4">
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Bioskop</a>
            </li>
            <li>
              <a href="#">Tiket Saya</a>
            </li>
            <li>
              <a href="#">Pembayaran</a>
            </li>
          </ul>
        </div>

        {/* Menu follow media sosial */}
        <div className="mb-4">
          <h4 className="mb-2 text-lg font-semibold">Follow Social Media</h4>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="link-to-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="h-6" />
            </a>
            <a href="link-to-github" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="h-6" />
            </a>
            <a href="link-to-youtube" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
