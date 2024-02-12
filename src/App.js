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
import Login from "pages/Login";
import Schedule from "pages/Schedule";
import Transaction from "pages/Transaction";
import TransactionSuccess from "pages/TransactionSucces";
import TransactionDetail from "pages/TransactionDetail";
import History from "pages/History";
import Review from "pages/Review";
import FilmList from "pages/FilmList";

// admin pages
import AddMovie from "pages/AddMovie";
import EditMovie from "pages/EditMovie";
import AddSchedule from "pages/AddSchedule";
import EditSchedule from "pages/EditSchedule";

// navbar, sidebar, footer
import Navbar from "components/Navbar";
import UserSidebar from "components/UserSidebar";
import AdminSidebar from "components/AdminSidebar";
import Footer from "components/Footer";
import AdminFilmList from "pages/AdminFilmList";

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
            <Route path="/login" element={<Login />} />
            <Route path="/list-film" element={<FilmList />} />
            <Route path="/jadwal" element={<Schedule />} />
            <Route path="/pembayaran" element={<Transaction />} />
            <Route
              path="/pembayaran-berhasil"
              element={<TransactionSuccess />}
            />
            <Route path="/detail-transaksi" element={<TransactionDetail/>}/>
            <Route path="/histori" element={<History />} />
            <Route path="/review" element={<Review />} />
            <Route path="/admin-list-film" element={<AdminFilmList />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/edit-movie" element={<EditMovie />} />
            <Route path="/add-schedule" element={<AddSchedule />} />
            <Route path="/edit-schedule" element={<EditSchedule />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/user-sidebar" element={<UserSidebar />} />
            <Route path="/admin-sidebar" element={<AdminSidebar />} />
            <Route path="/footer" element={<Footer />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
