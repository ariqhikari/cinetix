import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

// layouts
import Default from "layouts/Default";
import Admin from "layouts/Admin";
import Customer from "layouts/Customer";
import ScrollToTop from "components/ScrollToTop";

// middleware
import AuthorizeUser from "middleware/Auth";

// pages
import Home from "pages/Home";
import Login from "pages/Login";
import ListFilm from "pages/ListFilm";
import Schedule from "pages/Schedule";
import ChoosingSeats from "pages/ChoosingSeats";
import Transaction from "pages/Transaction";
import TransactionSuccess from "pages/TransactionSucces";
import TransactionDetail from "pages/TransactionDetail";
import Review from "pages/Review";
import History from "pages/History";


// customer
import CustomerActiveTickets from "pages/Customer/ActiveTickets";
import CustomerHistoryTransactions from "pages/Customer/HistoryTransactions";

// admin pages
import AddMovie from "pages/Admin/AddMovie";
import EditMovie from "pages/Admin/EditMovie";
import AddSchedule from "pages/Admin/AddSchedule";
import EditSchedule from "pages/Admin/EditSchedule";

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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list-film" element={<ListFilm />} />
            <Route path="/jl" adwa element={<Schedule />} />
            <Route path="/pemilihan-kursi" element={<ChoosingSeats />} />
            <Route path="/pembayaran" element={<Transaction />} />
            <Route
              path="/pembayaran-berhasil"
              element={<TransactionSuccess />}
            />
            <Route path="/detail-transaksi" element={<TransactionDetail/>}/>
            <Route path="/histori" element={<History />} />
            <Route path="/review" element={<Review />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/edit-movie" element={<EditMovie />} />
            <Route path="/add-schedule" element={<AddSchedule />} />
            <Route path="/edit-schedule" element={<EditSchedule />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
};

export default App;
