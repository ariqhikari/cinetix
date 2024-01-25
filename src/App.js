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

// keluhan
import Keluhan from "pages/Keluhan";

// navbar
import Navbar from "components/Navbar";

// footer
import Footer from "components/Footer";

// keluhan
import Keluhan from "pages/Keluhan";

// detail transaksi
import DetailTransaksi from "pages/DetailTransaksi"

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
<<<<<<< HEAD
            <Route path="/" element={<Boarding />} />
            <Route path="/" element={<Navbar />} />
            <Route path="/" element={<Footer />} />
            <Route path="/" element={<Keluhan />} />
            <Route path="/" element={<DetailTransaksi />} />
=======
            <Route path="/" element={<Home />} />
            <Route path="/pembayaran" element={<Pembayaran />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Keluhan" element={<Keluhan />} />
            <Route path="/Jadwal" element={<Jadwal />} />
>>>>>>> 12e1c5d64f1ccb1a0283af3a2854f84f02e5e25e
          </Route>

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
