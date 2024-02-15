import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

// services
import { getMovieDetail } from "services/Movie";

// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Button from "components/Button";

// assets
import ic_location from "assets/icons/ic_location.svg";
import ic_star from "assets/icons/ic_star.svg";

const Schedule = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [movie, setMovie] = useState(null);
  const [dates, setDates] = useState([
    moment(),
    moment().add(1, "days"),
    moment().add(2, "days"),
    moment().add(3, "days"),
    moment().add(4, "days"),
    moment().add(5, "days"),
    moment().add(6, "days"),
  ]);

  const [selectedDate, setSelectedDate] = useState(moment());
  const [time, setTime] = useState("08:00");
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const showtime = movie?.showtimes.find(
      (showtime) =>
        moment(showtime.date).format("D-MM-YYYY") ===
          selectedDate.format("D-MM-YYYY") && showtime.time === `${time}:00`
    );

    setSelectedShowtime(showtime);
  }, [selectedDate, time]);

  const getData = async () => {
    try {
      const response = await getMovieDetail(searchParams.get("id"));
      setMovie(response.data.body.data.movie);
      setSelectedDate(moment());
    } catch (error) {
      console.error(error);
    }
  };

  const submit = () => {
    if (user) {
      navigate(
        `/pemilihan-kursi?id=${selectedShowtime?.id}&date=${selectedDate.format(
          "D-MM-YYYY"
        )}&time=${time}`
      );
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      {movie && (
        <div className="mx-5 lg:mx-20">
          <h1 className="mb-4 text-3xl font-semibold">JADWAL</h1>
          <p className="text-gray">
            Pilih jadwal bioskop yang akan kamu tonton
          </p>

          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-24">
            <div>
              <div className="relative mt-8 flex w-[90vw] items-center gap-5 lg:w-[500px]">
                <div onClick={handlePrev} className="cursor-pointer">
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1.5L1.5 9L9 16.5"
                      stroke="#333333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Swiper
                  ref={sliderRef}
                  slidesPerView={2}
                  breakpoints={{
                    576: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {dates.map((date, index) => (
                    <SwiperSlide key={`date-${index}`}>
                      <div
                        onClick={() => setSelectedDate(date)}
                        className={`date ${
                          date.format("D MMM") === selectedDate.format("D MMM")
                            ? "selected"
                            : ""
                        }`}
                      >
                        <span className="text-center font-medium">
                          {moment(date).format("D MMM")}
                          <span className="day block font-semibold">
                            {moment(date).format("ddd")}
                          </span>
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div onClick={handleNext} className="cursor-pointer">
                  <svg
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 16L8.5 8.5L1 1"
                      stroke="#333333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="divider" />

              <div className="flex gap-3">
                <img src={ic_location} alt="Icon Location" />
                <span className="text-lg">Bandung</span>
              </div>

              <div className="mt-5 mb-10 h-[1px] bg-blue-gray-100" />

              <div className="mb-5 flex justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-blue">
                      <img src={ic_star} alt="Icon Star" />
                    </div>
                    <h5 className="text-xl font-medium">UNIKOM XXI</h5>
                  </div>
                  <span>Jl. DIPATIUKUR NO.112 - 116</span>
                </div>
                <div className="flex h-7 items-center justify-center rounded bg-yellow px-2 font-semibold text-white">
                  XXI
                </div>
              </div>

              <div className="mb-4 flex justify-between text-gray">
                <h5 className="text-xl font-medium">REGULAR 2D</h5>
                <span>Rp. 50.000</span>
              </div>

              <div className="mb-8 flex flex-wrap gap-4">
                <div
                  onClick={() => setTime("08:00")}
                  className={`time ${time == "08:00" ? "selected" : ""}`}
                >
                  08:00
                </div>
                <div
                  onClick={() => setTime("10:00")}
                  className={`time ${time == "10:00" ? "selected" : ""}`}
                >
                  10:00
                </div>
                <div
                  onClick={() => setTime("12:00")}
                  className={`time ${time == "12:00" ? "selected" : ""}`}
                >
                  12:00
                </div>
                <div
                  onClick={() => setTime("14:00")}
                  className={`time ${time == "14:00" ? "selected" : ""}`}
                >
                  14:00
                </div>
              </div>
            </div>

            <div>
              <img
                src={movie.poster}
                alt={movie.title}
                className="mb-10 h-[364px] w-full rounded-lg object-cover"
              />

              <h5 className="mb-5 text-xl font-medium text-accent-black">
                {movie.title}
              </h5>

              <table>
                <tr>
                  <td className="pr-10">Genre</td>
                  <td>{movie.genres.join(", ")}</td>
                </tr>
                <tr>
                  <td className="pr-10">Durasi</td>
                  <td>{movie.duration}</td>
                </tr>
                <tr>
                  <td className="pr-10">Sutradara</td>
                  <td>Jon Watts</td>
                </tr>
                <tr>
                  <td className="pr-10">Rating Usia</td>
                  <td>{movie.age_rating}</td>
                </tr>
              </table>

              <div className="divider" />

              <div className="flex gap-3">
                {Array.apply(0, Array(Math.round(movie.rating))).map(function (
                  _,
                  index
                ) {
                  return (
                    <img src={ic_star} alt="Icon Star" key={`star-${index}`} />
                  );
                })}
              </div>

              <div className="divider" />

              <div className="rounded-xl border border-gray p-4">
                <h4 className="mb-4 text-2xl font-semibold">UNIKOM XXI</h4>
                <span className="mb-2 block text-gray">
                  {selectedDate.format("dddd, D MMMM YYYY")}
                </span>
                <div className="mb-4 flex justify-between text-xl font-medium">
                  <span>REGULAR 2D</span>
                  <span>{time}</span>
                </div>

                <span className="mb-5 block text-xs text-[#9DA8BE]">
                  * Pemilihan kursi dapat dilakukan setelah ini
                </span>

                <Button
                  className="block w-full text-center"
                  isPrimary
                  isBlock
                  onClick={submit}
                >
                  BELI SEKARANG
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Schedule;
