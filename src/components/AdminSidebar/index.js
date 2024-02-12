import Ticket from "assets/images/ticket.png";
import Transaction from "assets/images/transaction.png";

const AdminSidebar = () =>  {
    return (
        <>
        <div className="flex min-h-screen">
            <div className="w-[272px] h-[500px] bg-gray-800 p-8 shadow-sm" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
                    <div className="bg-gray-800 text-black w-64 h-screen">
                        <div className="p-4">
                        <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center space-x-2">
                            <i className="fas fa-film text-gray-300"></i>
                            <img className='w-7 h-7' src={Ticket}></img>
                            <span className="hover:text-light-blue-900">Dashboard</span>
                            </a>
                        </li>
                        <div className="border-gray-400 border-b my-4"></div>
                        <li>
                            <a href="#" className="flex items-center space-x-2">
                            <i className="fas fa-history text-gray-300"></i>
                            <img className='w-7 h-7' src={Transaction}></img>
                            <span className="hover:text-light-blue-900">Daftar Film</span>
                            </a>
                        </li>
                        <div className="border-gray-400 border-b my-4"></div>
                        <li>
                            <a href="#" className="flex items-center space-x-2">
                            <i className="fas fa-comments text-gray-300"></i>
                            <img className='w-7 h-7' src={Transaction}></img>
                            <span className="hover:text-light-blue-900">Histori Pembayaran</span>
                            </a>
                        </li>
                        <div className="border-gray-400 border-b my-4"></div>
                        <li>
                            <a href="#" className="flex items-center space-x-2">
                            <i className="fas fa-ticket-alt text-gray-300"></i>
                            <img className='w-7 h-7' src={Transaction}></img>
                            <span className="hover:text-light-blue-900">Review Pelanggan</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AdminSidebar;  