import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";

// components
import Navbar from "components/Navbar"
import Footer from "components/Footer"

// assets
import thumbnail from "assets/images/thumbnail.png"
import banner from "assets/images/banner.png"

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

  return (
    <>
      <Navbar />
      <div className="relative">
        <Swiper
          ref={sliderRef}
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mx-80 mt-10"
          loop={true}
        >
          <SwiperSlide>
            <img
              src={thumbnail}
              alt=""
              className="h-[75vh] w-full rounded-2xl object-cover"
            />
            <h2 className="mt-6 text-center text-xl font-bold">
              Spiderman : No Way Home
            </h2>
            <div className="mt-5 flex w-full justify-center gap-4">
              <div className="rounded bg-yellow px-2 py-1 text-white">
                Action
              </div>
              <div className="rounded bg-yellow px-2 py-1 text-white">
                Fantasy
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={thumbnail}
              alt=""
              className="h-[75vh] w-full rounded-2xl object-cover"
            />
            <h2 className="mt-6 text-center text-xl font-bold">
              Spiderman : No Way Home
            </h2>
            <div className="mt-5 flex w-full justify-center gap-4">
              <div className="rounded bg-yellow px-2 py-1 text-white">
                Action
              </div>
              <div className="rounded bg-yellow px-2 py-1 text-white">
                Fantasy
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={thumbnail}
              alt=""
              className="h-[75vh] w-full rounded-2xl object-cover"
            />
            <h2 className="mt-6 text-center text-xl font-bold">
              Spiderman : No Way Home
            </h2>
            <div className="mt-5 flex w-full justify-center gap-4">
              <div className="rounded bg-yellow px-2 py-1 text-white">
                Action
              </div>
              <div className="rounded bg-yellow px-2 py-1 text-white">
                Fantasy
              </div>
            </div>
          </SwiperSlide>
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
        <img
          src={banner}
          alt=""
          className="h-[30vh] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="mx-20 flex justify-between">
        <div>
          <h4 className="text-xl font-semibold">Akan Datang</h4>
          <p>Tunggu kehadirannya di bioskop kesayangan kamu!</p>
        </div>
        <a href="#" className="text-light-blue-600">
          Lihat Semua
        </a>
      </div>
      <div className="mx-20 my-14 grid grid-cols-3 gap-5">
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[75vh] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[75vh] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[75vh] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
