import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import Sidebar from "components/Sidebar";

const Admin = () => {
  const location = useLocation();

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const links = document.querySelectorAll(".list-sidebar a");

    if (window.screen.width < 1024) {
      // Links klik
      links.forEach((link) => {
        link.addEventListener("click", () => {
          sidebar.classList.remove("active");
        });
      });
    }
  }, [location]);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");

    if (window.screen.width >= 1024) {
      sidebar.classList.add("active");
    }
  }, []);

  return (
    <div className="flex w-screen bg-white">
      <Sidebar />
      <div className="content relative mx-auto h-screen w-full overflow-y-auto py-6 pl-4 pr-4 lg:pl-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
