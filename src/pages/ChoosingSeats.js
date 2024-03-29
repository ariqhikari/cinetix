import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

// services
import { getShowtime } from "services/Movie";
import { formatNumber } from "services/general";

// components
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Button from "components/Button";

// assets
import ic_time from "assets/icons/ic_time.svg";

const ChoosingSeats = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showtime, setShowtime] = useState(null);

  const [bookingSeats, setBookingSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const onSelectSeat = (seat) => {
    if (bookingSeats.includes(seat)) {
      setBookingSeats((prevBookingSeat) =>
        prevBookingSeat.filter((s) => s !== seat)
      );
    } else {
      if (bookingSeats.length === 6) {
        toast.error("Jumlah maksimum pemesanan kursi adalah 6!");
        return;
      }
      setBookingSeats((prevBookingSeat) => [...prevBookingSeat, seat]);
    }
  };

  const seatNumber = (i, index) => {
    return `${String.fromCharCode(i + 65)}${index + 1}`;
  };

  const checkBookingSeat = (seat) => {
    return showtime?.seats[seat] ?? false;
  };

  const renderSeats = () => {
    const numberOfSeats = [10, 10, 10, 10, 10, 10, 10, 10];
    const seatRows = [];

    for (let i = 0; i < numberOfSeats.length; i++) {
      const seatRow = [];
      for (let index = 0; index < numberOfSeats[i]; index++) {
        seatRow.push(
          <div
            key={`seat-${i}-${index}`}
            className={`seat mx-2 my-1 ${
              checkBookingSeat(seatNumber(i, index))
                ? "disabled !cursor-not-allowed"
                : bookingSeats.includes(seatNumber(i, index))
                ? "selected"
                : ""
            }`}
            onClick={() =>
              !checkBookingSeat(seatNumber(i, index))
                ? onSelectSeat(seatNumber(i, index))
                : null
            }
          >
            {seatNumber(i, index)}
          </div>
        );
      }

      seatRows.push(
        <div
          key={`seat-row-${i}`}
          style={{
            marginBottom: `${i !== numberOfSeats.length - 1 ? "10px" : "20px"}`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {seatRow}
        </div>
      );
    }

    return <div>{seatRows}</div>;
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setTotalPrice(bookingSeats.length * 50000);
  }, [bookingSeats]);

  const getData = async () => {
    try {
      const response = await getShowtime(searchParams.get("id"));
      setShowtime(response.data.body.data.showtime);
    } catch (error) {
      console.error(error);
    }
  };

  const submit = () => {
    if (bookingSeats.length === 0) {
      toast.error("Pilih kursi terlebih dahulu!");
      return;
    }

    navigate(
      `/pembayaran?id=${searchParams.get("id")}&seats=${bookingSeats.join(",")}`
    );
  };

  return (
    <>
      <Navbar />
      <div className="mx-20">
        <h1 className="mb-4 text-3xl font-semibold">PILIH KURSI</h1>
        <p className="text-gray">
          Pilih kursi yang akan kamu tempati selama pemutaran film
        </p>
      </div>

      {showtime && (
        <>
          <div className="mx-48 mt-10">
            <div className="mb-10 flex justify-between">
              <div className="flex items-center gap-4">
                <img src={ic_time} alt="Icon Time" />
                <span className="text-2xl font-medium text-dark-blue">
                  {searchParams.get("time")}
                </span>
              </div>

              <div className="flex gap-5">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 border border-gray bg-dark-blue"></div>
                  <p className="font-semibold">Terisi</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 border border-gray bg-white"></div>
                  <p className="font-semibold">Kursi Kosong</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 border border-gray bg-blue"></div>
                  <p className="font-semibold">Dipilih</p>
                </div>
              </div>
            </div>

            {renderSeats()}
          </div>

          <div className="mt-14 bg-blue py-5 text-center text-xl font-semibold text-white">
            Layar Bioskop Disini
          </div>

          <div className="mx-48 mt-10">
            <div className="grid grid-cols-3 gap-5">
              <div>
                <span className="block text-lg text-gray">Total</span>
                <span className="text-3xl font-semibold text-accent-black">
                  Rp. {formatNumber(totalPrice)}
                </span>
              </div>

              <div>
                <span className="block text-lg text-gray">Kursi</span>
                <span className="text-3xl font-semibold text-accent-black">
                  {bookingSeats.length === 0 ? "-" : bookingSeats.join(", ")}
                </span>
              </div>

              <div className="flex gap-5">
                <Button isSecondary onClick={() => navigate(-1)}>
                  Kembali
                </Button>
                <Button onClick={submit} isPrimary>
                  KONFIRMASI
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ChoosingSeats;
