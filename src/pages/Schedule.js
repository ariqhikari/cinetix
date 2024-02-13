import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";

// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Button from "components/Button";

// assets
import ic_location from "assets/icons/ic_location.svg";
import ic_star from "assets/icons/ic_star.svg";
import thumbnail from "assets/images/thumbnail.png";

const Schedule = () => {
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
      <div className="mx-5 lg:mx-20">
        <h1 className="mb-4 text-3xl font-semibold">JADWAL</h1>
        <p className="text-gray">Pilih jadwal bioskop yang akan kamu tonton</p>

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
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="date">
                    <span className="text-center font-medium">
                      15 Des
                      <span className="day block font-semibold">RAB</span>
                    </span>
                  </div>
                </SwiperSlide>
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
              <span>Rp. 45.000 - 50.000</span>
            </div>

            <div className="mb-8 flex flex-wrap gap-4">
              <div className="time disabled">15:40</div>
              <div className="time selected">15:40</div>
              <div className="time">15:40</div>
              <div className="time">15:40</div>
              <div className="time">15:40</div>
              <div className="time">15:40</div>
              <div className="time">15:40</div>
              <div className="time">15:40</div>
              <div className="time">15:40</div>
            </div>

            <div className="mb-4 flex justify-between text-gray">
              <h5 className="text-xl font-medium">GOLD CLASS 2D</h5>
              <span>Rp. 100.000</span>
            </div>

            <div className="mb-4 flex flex-wrap gap-4">
              <div className="time disabled">15:40</div>
              <div className="time selected">15:40</div>
              <div className="time">15:40</div>
            </div>
          </div>

          <div>
            <img
              src={thumbnail}
              alt="Thumbnail"
              className="mb-10 h-[364px] w-full rounded-lg object-cover"
            />

            <h5 className="mb-5 text-xl font-medium text-accent-black">
              SPIDERMAN : NO WAY HOME
            </h5>

            <table>
              <tr>
                <td className="pr-10">Genre</td>
                <td>Action</td>
              </tr>
              <tr>
                <td className="pr-10">Durasi</td>
                <td>2 jam 28 menit</td>
              </tr>
              <tr>
                <td className="pr-10">Sutradara</td>
                <td>Jon Watts</td>
              </tr>
              <tr>
                <td className="pr-10">Rating Usia</td>
                <td>SU</td>
              </tr>
            </table>

            <div className="divider" />

            <div className="flex gap-3">
              <img src={ic_star} alt="Icon Star" />
              <img src={ic_star} alt="Icon Star" />
              <img src={ic_star} alt="Icon Star" />
              <img src={ic_star} alt="Icon Star" />
              <img src={ic_star} alt="Icon Star" />
            </div>

            <div className="divider" />

            <div className="rounded-xl border border-gray p-4">
              <h4 className="mb-4 text-2xl font-semibold">UNIKOM XXI</h4>
              <span className="mb-2 block text-gray">
                Kamis, 16 Desember 2021
              </span>
              <div className="mb-4 flex justify-between text-xl font-medium">
                <span>REGULAR 2D</span>
                <span>14:40</span>
              </div>

              <span className="mb-5 block text-xs text-[#9DA8BE]">
                * Pemilihan kursi dapat dilakukan setelah ini
              </span>

              <Button isPrimary isBlock>
                BELI SEKARANG
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
