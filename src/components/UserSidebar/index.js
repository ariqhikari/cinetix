import Ticket from "assets/images/ticket.png";
import Transaction from "assets/images/transaction.png";

const UserSidebar = () =>  {
    return (
        <>
        <div className="flex min-h-screen">
            <div className="w-[272px] h-[500px] p-8 shadow-sm" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
                    <div className="bg-gray-800 text-black w-64 h-screen">
                        <div className="p-4">
                        <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center space-x-2">
                            <i className="fas fa-film text-gray-300"></i>
                            <img className='w-7 h-7' src={Ticket}></img>
                            <span className="hover:text-light-blue-900">TIKET AKTIF</span>
                            </a>
                        </li>
                        <div className="border-gray-400 border-b my-4"></div>
                        <li>
                            <a href="#" className="flex items-center space-x-2">
                            <i className="fas fa-history text-gray-300"></i>
                            <img className='w-7 h-7' src={Transaction}></img>
                            <span className="hover:text-light-blue-900">DAFTAR TRANSAKSI</span>
                            </a>
                        </li>
                        <div className="border-gray-400 border-b my-4"></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default UserSidebar;  