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
import Login from "pages/Login";
import Jadwal from "pages/Jadwal";

// navbar
import Navbar from "components/Navbar";

// footer
import Footer from "components/Footer";

// keluhan
import Review from "pages/Review";

// detail transaksi
import DetailTransaksi from "pages/DetailTransaksi";

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
            <Route path="/review" element={<Review />} />
            <Route path="/jadwal" element={<Jadwal />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
