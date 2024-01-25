import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

// layouts
import Default from "layouts/Default";
import Admin from "layouts/Admin";
import ScrollToTop from "components/ScrollToTop";

// middleware
import AuthorizeUser from "middleware/Auth";

// pages
import Home from "pages/Home";
import Pembayaran from "pages/Pembayaran";
<<<<<<< HEAD
import Jadwal from "pages/Jadwal";

// boarding
import Boarding from "pages/Boarding";
=======
import Login from "pages/Login";

// keluhan
import Keluhan from "pages/Keluhan";
>>>>>>> 8a1489cda23dfd6856acdb8caeef5742304be5db

const App = () => {
  const location = useLocation();

  const transitionPage = () => {
    return !location.pathname.includes("customer") &&
      !location.pathname.includes("admin")
      ? location.pathname
      : "";
  };

  return (
    <>
      <ScrollToTop />
      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="/pembayaran" element={<Pembayaran />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
