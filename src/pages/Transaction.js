import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

// services
import { getShowtime, createTransaction } from "services/Movie";
import { confirmModal, formatNumber, successModal } from "services/general";

// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Button from "components/Button";

// assets
import ic_arrow_left from "assets/icons/ic_arrow_left.svg";
import ic_wallet from "assets/icons/ic_wallet.svg";

const Pembayaran = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();

  const [showtime, setShowtime] = useState(null);
  const [bookingSeats, setBookingSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getShowtime(searchParams.get("id"));
      const bookingSeats = searchParams.get("seats").split(",");

      setShowtime(response.data.body.data.showtime);
      setBookingSeats(bookingSeats);
      setTotalPrice(bookingSeats.length * 50000 + bookingSeats.length * 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const submit = () => {
    confirmModal().then(async (result) => {
      if (result.isConfirmed) {
        try {
          await createTransaction({
            userId: user.id,
            showTimeId: showtime.id,
            totalCost: totalPrice,
            bookingSeat: bookingSeats,
          });

          successModal("Success", "Pembayaran telah berhasil!");
          navigate("/pembayaran-berhasil");
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="mx-20">
        <h1 className="mb-4 text-3xl font-semibold">KONFIRMASI PEMBAYARAN</h1>
        <p className="text-gray">
          Konfirmasi pembayaran dari kursi yang anda pesan
        </p>

        {showtime && (
          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-5 text-xl font-medium">Detail Jadwal</h2>
              <p className="text-dark-blue">Judul Film</p>
              <span className="text-xl font-medium">
                {showtime?.movie.title}
              </span>
              <div className="my-4 h-[1px] bg-blue-gray-100" />

              <p className="text-dark-blue">Tanggal</p>
              <span className="text-xl font-medium">
                {moment(showtime?.date).format("dddd, DD MMMM YYYY")}
              </span>
              <div className="my-4 h-[1px] bg-blue-gray-100" />

              <div className="grid grid-cols-2">
                <div>
                  <p className="text-dark-blue">Kelas</p>
                  <span className="text-xl font-medium">REGULAR 2D</span>
                </div>
                <div>
                  <p className="text-dark-blue">Jam</p>
                  <span className="text-xl font-medium">{showtime.time}</span>
                </div>
              </div>
              <div className="my-4 h-[1px] bg-blue-gray-100" />

              <p className="text-dark-blue">Tiket ({bookingSeats.length})</p>
              <span className="text-xl font-medium">
                {bookingSeats.join(", ")}
              </span>
              <div className="mt-4 mb-10 h-[1px] bg-blue-gray-100" />

              <div
                onClick={() => navigate(-1)}
                className="flex cursor-pointer gap-4 text-xl font-semibold text-gray"
              >
                <img src={ic_arrow_left} alt="Icon Arrow Left" />
                Kembali
              </div>
            </div>

            <div className="rounded-xl border border-[#C4C4C4] px-6 py-5 shadow">
              <h2 className="mb-5 text-xl font-medium">Ringkasan Order</h2>
              <h4 className="mb-3 font-semibold">Detail Transaksi</h4>
              <div className="mb-1 flex justify-between">
                <span>REGULAR SEAT</span>
                <div className="flex items-center gap-3">
                  Rp. 50.000
                  <span className="font-semibold text-dark-blue">
                    X{bookingSeats.length}
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <span>BIAYA LAYANAN</span>
                <div className="flex items-center gap-3">
                  Rp.3.000
                  <span className="font-semibold text-dark-blue">
                    X{bookingSeats.length}
                  </span>
                </div>
              </div>

              <div className="my-4 h-[1px] bg-blue-gray-100" />

              <div className="flex justify-between font-semibold">
                <h4>Total Bayar</h4>
                <h4>Rp. {formatNumber(totalPrice)}</h4>
              </div>

              <div className="my-4 h-[1px] bg-blue-gray-100" />

              <h4 className="mb-3 font-semibold">Metode Pembayaran</h4>
              <div className="mb-8 flex gap-3">
                <img src={ic_wallet} alt="Icon Wallet" />
                E-Wallet
              </div>

              <p className="mb-4 text-sm text-red">
                *Pembelian tiket tidak dapat dibatalkan
              </p>

              <Button onClick={submit} isPrimary isBlock>
                BELI TIKET
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Pembayaran;
