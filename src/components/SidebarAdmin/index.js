import Ticket from "assets/images/ticket.png";
import Transaction from "assets/images/transaction.png";

const SidebarAdmin = () => {
  return (
    <div className="flex min-h-screen">
      <div
        className="bg-gray-800 h-[500px] w-[272px] p-8 shadow-sm"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
        <div className="bg-gray-800 h-screen w-64 text-black">
          <div className="p-4">
            <ul className="space-y-2 hover:text-light-blue-900">
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="fas fa-film text-gray-300"></i>
                  <img className="h-7 w-7" src={Ticket}></img>
                  <span>Daftar Film</span>
                </a>
              </li>
              <div className="border-gray-400 my-4 border-b"></div>
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="fas fa-history text-gray-300"></i>
                  <img className="h-7 w-7" src={Transaction}></img>
                  <span>Histori Pembayaran</span>
                </a>
              </li>
              <div className="border-gray-400 my-4 border-b"></div>
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="fas fa-comments text-gray-300"></i>
                  <img className="h-7 w-7" src={Transaction}></img>
                  <span>Keluhan Pelanggan</span>
                </a>
              </li>
              <div className="border-gray-400 my-4 border-b"></div>
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="fas fa-ticket-alt text-gray-300"></i>
                  <img className="h-7 w-7" src={Transaction}></img>
                  <span>Tiket Saya</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
