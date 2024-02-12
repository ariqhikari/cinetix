import { Outlet } from "react-router-dom";

// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import SidebarCustomer from "components/SidebarCustomer";

const Customer = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-5">
        <div className="w-[20%]">
          <SidebarCustomer />
        </div>

        <div className="w-full px-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Customer;
