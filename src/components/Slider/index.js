import { useEffect, useState } from "react";

// services
import { getBanner } from "services/Admin";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// assets
import ic_arrow_left_white from "assets/icons/ic_arrow_left_white.svg";
import ic_arrow_right_white from "assets/icons/ic_arrow_right_white.svg";

const Slider = () => {
  const [mySwiper, setMySwiper] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getBanner();
      setData(response.data.body.data.banners);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    data && (
      <Swiper
        slidesPerView={1}
        loop={true}
        onInit={(ev) => {
          setMySwiper(ev);
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={`item-${index}`} className="relative">
            <img
              src={`${process.env.REACT_APP_STORAGE}banners/${item.image}`}
              alt={`Quotes ${index + 1}`}
              className="h-screen w-full object-cover"
            />
            <div
              className="absolute bottom-0 left-1/2 mb-10 w-[90%] rounded-[20px] border-2 border-white bg-[#FFFFFF33] py-5 px-6 text-white backdrop-blur-sm"
              style={{ transform: "translate(-50%, 0)" }}
            >
              <h4 className="text-justify text-xl">“{item.message}”</h4>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <span className="text-base">{item.job}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    title="Slide Prev"
                    onClick={() => mySwiper.slidePrev()}
                    className="icon-arrow cursor-pointer border-white"
                  >
                    <img src={ic_arrow_left_white} alt="Icon Arrow Left" />
                  </div>

                  <div
                    title="Slide Next"
                    onClick={() => mySwiper.slideNext()}
                    className="icon-arrow cursor-pointer border-white"
                  >
                    <img src={ic_arrow_right_white} alt="Icon Arrow Right" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0  border-t-[100px] border-l-[100px] border-solid border-t-white border-l-transparent"></div>
            <div className="absolute top-3 right-2 flex items-end">
              <span className="text-accent-gray">{data.length}</span>
              <svg
                className="mx-1.5 mb-1.5"
                width="2"
                height="11"
                viewBox="0 0 2 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="2" height="11" fill="#191919" />
              </svg>

              <span className="text-3xl font-medium">{index + 1}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};

export default Slider;
