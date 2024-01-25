import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

// layouts
import Default from "layouts/Default";
import Admin from "layouts/Admin";
import ScrollToTop from "components/ScrollToTop";

// middleware
import AuthorizeUser from "middleware/Auth";

// pages

// boarding
import Boarding from "pages/Boarding";

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
      <PageTransition
        preset="fadeLeftFadeRight"
        transitionKey={transitionPage()}
      >
        <Routes location={location}>
          <Route path="/" element={<Default />}>
            <Route path="/" element={<Boarding />} />
            <Route path="/" element={<Navbar />} />
            <Route path="/" element={<Footer />} />
            <Route path="/" element={<Keluhan />} />
            <Route path="/" element={<DetailTransaksi />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
