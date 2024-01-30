import ic_location from "assets/icons/ic_location.png";
import ic_star from "assets/icons/ic_star.png";
import ic_star_rating from "assets/icons/ic_star_rating.png";
import thumbnail from "assets/images/thumbnail.png";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const DetailFilm = () => {
  return (
    <>
      <Navbar />
      <div className="relative mx-2 flex min-h-screen flex-col p-1">
        <form className="space-y-4" action="#" method="POST">
          <div className="flex h-[50px] grow-0 items-center p-4 text-2xl font-semibold">
            Jadwal
          </div>
          <div class="justfy-center relative mt-2 flex h-[800px] flex-row gap-20 px-4">
            {/* Sisi kiri */}
            <div class="mr-10 flex basis-3/5 flex-col">
              {/* Pilih tanggal Dinamis*/}
              {/* <div className="relative m-2 flex h-[100px] grow-0 flex-row items-center justify-center p-3">
                <div class=" border-1 mx-2 flex flex-col items-center justify-center rounded-lg border bg-blue-gray-100 p-3 hover:bg-blue-gray-200 active:bg-blue-gray-300 ">
                  <p class="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p class="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </div>
                <div class=" border-1 mx-2 flex flex-col items-center justify-center rounded-lg border bg-blue-gray-100 p-3 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                  <p class="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p class="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </div>
                <div class=" border-1 mx-2 flex flex-col items-center justify-center rounded-lg border bg-blue-gray-100 p-3 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                  <p class="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p class="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </div>
                <div class=" border-1 mx-2 flex flex-col items-center justify-center rounded-lg border bg-blue-gray-100 p-3 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                  <p class="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p class="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </div>
                <div class=" border-1 mx-2 flex flex-col items-center justify-center rounded-lg border bg-blue-gray-100 p-3 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                  <p class="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p class="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </div>
                <div class=" border-1 mx-2 flex flex-col items-center justify-center rounded-lg border bg-blue-gray-100 p-3 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                  <p class="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p class="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </div>
              </div> */}

              {/* <div className="relative m-2 flex h-[100px] grow-0 flex-row items-center justify-center p-3">
                <input
                  type="radio"
                  id="option1"
                  name="dateOption"
                  className="hidden"
                />
                <label
                  htmlFor="option1"
                  className="button-container border-1 hover:bg-blue-gray100 mx-2 flex flex-col items-center justify-center rounded-lg border p-3 focus:bg-black active:bg-blue-gray-200"
                >
                  <p className="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p className="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </label>

                <input
                  type="radio"
                  id="option2"
                  name="dateOption"
                  className="hidden"
                />
                <label
                  htmlFor="option2"
                  className="button-container border-1 borderp-3 mx-2 flex flex-col items-center justify-center rounded-lg border p-3 hover:bg-blue-gray-100 focus:bg-black active:bg-blue-gray-200"
                >
                  <p className="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p className="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </label>

                <input
                  type="radio"
                  id="option3"
                  name="dateOption"
                  className="hidden"
                />
                <label
                  htmlFor="option3"
                  className="button-container border-1 mx-2 flex flex-col items-center justify-center rounded-lg border p-3 hover:bg-blue-gray-100 focus:bg-black active:bg-blue-gray-200"
                >
                  <p className="text-gray-500 font-['Roboto'] text-lg font-semibold">
                    21 Oct
                  </p>
                  <p className="text-gray-500 font-['Roboto'] text-xl font-black">
                    SEN
                  </p>
                </label>
              </div> */}

              {/* Tulisan BANDUNG */}
              <div>
                <hr className="border-blue-gray-400"></hr>
                <div className="relative m-2 flex items-center">
                  <div class="relative ml-2 inline-flex items-start">
                    <img
                      src={ic_location}
                      alt="location"
                      className="mt-1 h-5"
                    />
                    <p className="ml-1 font-['Roboto'] text-xl font-light text-black">
                      BANDUNG
                    </p>
                  </div>
                </div>
                <hr className="border-blue-gray-400"></hr>
              </div>

              {/* Nama Bioskop static*/}
              <div className="relative mx-2 mt-4 flex h-[80px] flex-col p-2">
                <div className="ml-2 inline-flex">
                  <img src={ic_star} alt="star Logo" className="mt-1 h-6" />
                  <p class="ml-1 font-['Roboto'] text-2xl font-medium text-black">
                    UNIKOM XXI
                  </p>
                </div>
                <div class="text-zinc-800 ml-2 w-[426px] font-['Roboto'] text-base font-normal">
                  Jl. DIPATIUKUR NO.112 - 116
                </div>
              </div>

              {/* Pilih Jam buat Reguler Dinamis*/}
              <div className="relative mx-2 flex h-[220px] flex-col px-2">
                <div className="mx-2 inline-flex justify-between">
                  <p class="font-['Roboto'] text-2xl font-bold text-blue-gray-700">
                    REGULAR 2D
                  </p>
                  <div class="text-right font-['Roboto'] text-lg font-normal text-blue-gray-700">
                    Rp. 45.000 - Rp. 50.000
                  </div>
                </div>
                {/* Pilihan Jam */}
                <div className="relative flex w-[350px] grow-0 flex-row flex-wrap py-2">
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                </div>
              </div>

              {/* Pilih Jam buat GOLD Dinamis*/}
              <div className="relative mx-2 flex h-[220px] flex-col px-2">
                <div className="mx-2 inline-flex justify-between">
                  <p class="font-['Roboto'] text-2xl font-bold text-blue-gray-700">
                    GOLD CLASS 2D
                  </p>
                  <div class="text-right font-['Roboto'] text-lg font-normal text-blue-gray-700">
                    Rp. 70.000
                  </div>
                </div>
                <div className="relative flex w-[350px] grow-0 flex-row flex-wrap py-2">
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                  <div class="border-1 m-1 flex h-10 w-[70px] items-center justify-center gap-2.5 rounded border bg-blue-gray-100 hover:bg-blue-gray-200 active:bg-blue-gray-300">
                    <p class="font-['Roboto'] text-sm font-bold">14:40</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sisi kanan */}
            <div class="flex flex-col">
              {/* Foto Film Harus Dinamis */}
              <div className="m-2 flex justify-center">
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  className="h-[214px] w-[413px] rounded-2xl object-contain"
                />
              </div>

              {/* Detail Film yang dipesan Dinamis */}
              <div className="relative mx-2 my-1 flex flex-col px-2">
                {/* Nama Film */}
                <div class="relative">
                  <p class="font-['Roboto'] text-2xl font-medium">
                    SPIDERMAN : NO WAY HOME
                  </p>
                </div>

                {/* Detail Film */}
                <div className="my-1 flex flex-row">
                  <div className="relative flex w-[170px] flex-col">
                    <p class="font-['Roboto'] text-lg font-medium">
                      Genre<br></br>
                      Durasi<br></br>
                      Sutradara<br></br>
                      Rating Usia
                    </p>
                    <p class="font-['Roboto'] text-lg font-medium"></p>
                  </div>
                  <div className="flex flex-row">
                    <p class="font-['Roboto'] text-lg font-medium">
                      Action<br></br>
                      2j 25m<br></br>
                      Sutradara<br></br>
                      R13+
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div>
                <hr className="border-blue-gray-400"></hr>
                <div className="relative m-2 flex flex-col p-1">
                  {/* Rating dalam bentuk bintang */}
                  <div class="ml-1 flex flex-row">
                    <img
                      src={ic_star_rating}
                      alt="rating"
                      className="relative my-1 ml-1 h-[24px] w-[24px]"
                    />
                    <img
                      src={ic_star_rating}
                      alt="rating"
                      className="relative my-1 ml-1 h-[24px] w-[24px]"
                    />
                    <img
                      src={ic_star_rating}
                      alt="rating"
                      className="relative my-1 ml-1 h-[24px] w-[24px]"
                    />
                    <img
                      src={ic_star_rating}
                      alt="rating"
                      className="relative my-1 ml-1 h-[24px] w-[24px]"
                    />
                    <img
                      src={ic_star_rating}
                      alt="rating"
                      className="relative my-1 ml-1 h-[24px] w-[24px]"
                    />
                  </div>
                  {/* Jumlah Pemilih */}
                  <div class="ml-2 font-['Roboto'] text-sm font-normal">
                    9.457 Pemilih
                  </div>
                </div>
                <hr className="border-blue-gray-400"></hr>
              </div>

              {/* Detail tiket */}
              <div className="mx-2 my-2 flex max-w-md flex-col rounded-md border-blue-gray-500 bg-white p-6 shadow-xl">
                {/* Nama Bioskop Statis */}
                <div class="mb-4 pb-2 font-['Roboto'] text-2xl font-medium text-black">
                  UNIKOM XXI
                </div>
                {/* Waktu dan yang lainnya Dinamis */}
                <div className="mt-2 flex flex-col">
                  <div class="font-['Roboto'] text-sm font-normal text-black">
                    Senin, 23 Oktober 2024
                  </div>
                  <div className="inline-flex justify-between">
                    <div class="font-['Roboto'] text-2xl font-medium text-black">
                      GOLD CLASS 2D
                    </div>
                    <div class="text-right font-['Roboto'] text-lg font-medium text-black">
                      14:40
                    </div>
                  </div>
                  <div class="w-[388px] font-['Roboto'] text-xs font-normal text-blue-gray-500">
                    *Pemiliihan kursi dapat dilakukan setelah ini
                  </div>
                </div>

                {/* Button Beli */}
                <div className="mt-5">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                  >
                    Beli Tiket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DetailFilm;
