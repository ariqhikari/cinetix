import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// services
import { getNowPlaying } from "services/Movie";

// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MovieItem from "components/MovieItem";

// assets
import banner from "assets/images/banner.png";

import "swiper/css";

const Home = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getNowPlaying();
      setData(response.data.body.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        <Swiper
          ref={sliderRef}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
          }}
          className="mx-5 mt-10 lg:mx-80"
        >
          {data.map((movie, index) => (
            <SwiperSlide key={`movie-slide-${index}`}>
              <MovieItem data={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="arrow-slider absolute top-64 left-48"
          onClick={handlePrev}
        >
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
        <div
          className="arrow-slider absolute top-64 right-48"
          onClick={handleNext}
        >
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
      <div className="my-20">
        <img src={banner} alt="" className="w-full object-cover lg:h-[30vh]" />
      </div>
      <div className="mx-5 flex justify-between lg:mx-20">
        <div>
          <h4 className="text-xl font-semibold">Akan Datang</h4>
          <p>Tunggu kehadirannya di bioskop kesayangan kamu!</p>
        </div>
        <Link to="/list-film" className="text-light-blue-600">
          Lihat Semua
        </Link>
      </div>
      <div className="mx-5 my-14 grid gap-5 md:grid-cols-2 lg:mx-20 lg:grid-cols-3">
        {data.map((movie, index) => (
          <MovieItem key={`movie-${index}`} data={movie} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
