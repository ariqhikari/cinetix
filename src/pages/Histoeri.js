import Navbar from "components/Navbar"
import Footer from "components/Footer"
import tiketaktif from "assets/images/Vector.png"
import dftrtrnsksi from "assets/images/Group 43.png"
import lokasi from "assets/images/lokasi.png"
const Histori = () => {
  return (
    <>
      <Navbar />
      <div className=" justtify-between flex">
        {/* Kiri */}
        <div className="ml-20 mt-10">
          <div className="justify-left flex">
            <img src={tiketaktif} />
            <button className="text-blue-500 ml-5 ">TIKET AKTIF</button>
          </div>
          <br></br>
          <hr className="border-blue-gray-400"></hr>
          <br></br>
          <div className="justify-left flex">
            <img src={dftrtrnsksi} />
            <button className="text-blue-500 ml-7 ">DAFTAR TRANSAKSI</button>
          </div>
        </div>
        {/* Kanan */}
        <div className="ml-80 mt-10">
          <p className="text-2xl font-semibold">Tiket Saya</p>
          <p>Daftar tiket dan transaksi yang pernah anda lakukan</p>
          <div className="flex justify-between">
            {/* kiri */}
            <div className="justify-left mt-10 mt-5 flex w-full gap-5">
              <div class="h-60 w-60 rounded bg-blue-gray-200"></div>
            </div>
            {/* kanan */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-s mt-6  font-bold">
                  Spiderman:No Way Home
                </h2>
                <button className="border-blue-500 ml-80 mt-6 rounded-lg border bg-greybutton px-4 py-2 text-white">
                  Berhasil
                </button>
              </div>
              <h2 className="text-s mt-6  font-bold">
                Kamis, 16 Desember 2024, 14: 00{" "}
              </h2>
              <div className="flex">
                <img src={lokasi} />
                <h1 className="ml-3 text-grey-tulisan">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between">
            {/* kiri */}
            <div className="justify-left mt-10 mt-5 flex w-full gap-5">
              <div class="h-60 w-60 rounded bg-blue-gray-200"></div>
            </div>
            {/* kanan */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-s mt-6  font-bold">
                  Spiderman:No Way Home
                </h2>
                <button className="border-blue-500 ml-80 mt-6 rounded-lg border bg-greybutton px-4 py-2 text-white">
                  Berhasil
                </button>
              </div>
              <h2 className="text-s mt-6  font-bold">
                Kamis, 16 Desember 2024, 14: 00{" "}
              </h2>
              <div className="flex">
                <img src={lokasi} />
                <h1 className="ml-3 text-grey-tulisan">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between">
            {/* kiri */}
            <div className="justify-left mt-10 mt-5 flex w-full gap-5">
              <div class="h-60 w-60 rounded bg-blue-gray-200"></div>
            </div>
            {/* kanan */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-s mt-6  font-bold">
                  Spiderman:No Way Home OME
                </h2>
                <button className="border-blue-500 ml-80 mt-6 rounded-lg border bg-greybutton px-4 py-2 text-white">
                  Berhasil
                </button>
              </div>
              <h2 className="text-s mt-6  font-bold">
                Kamis, 16 Desember 2024, 14: 00{" "}
              </h2>
              <div className="flex">
                <img src={lokasi} />
                <h1 className="ml-3 text-grey-tulisan">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between">
            {/* kiri */}
            <div className="justify-left mt-10 mt-5 flex w-full gap-5">
              <div class="h-60 w-60 rounded bg-blue-gray-200"></div>
            </div>
            {/* kanan */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-s mt-6  font-bold">
                  Spiderman:No Way Home
                </h2>
                <button className="border-blue-500 ml-80 mt-6 rounded-lg border bg-greybutton px-4 py-2 text-white">
                  Berhasil
                </button>
              </div>
              <h2 className="text-s mt-6  font-bold">
                Kamis, 16 Desember 2024, 14: 00{" "}
              </h2>
              <div className="flex">
                <img src={lokasi} />
                <h1 className="ml-3 text-grey-tulisan">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between">
            {/* kiri */}
            <div className="justify-left mt-10 mt-5 flex w-full gap-5">
              <div class="h-60 w-60 rounded bg-blue-gray-200"></div>
            </div>
            {/* kanan */}
            <div>
              <div className="flex justify-between">
                <h2 className="text-s mt-6  font-bold">
                  Spiderman:No Way Home
                </h2>
                <button className="border-blue-500 ml-80 mt-6 rounded-lg border bg-greybutton px-4 py-2 text-white">
                  Berhasil
                </button>
              </div>
              <h2 className="text-s mt-6  font-bold">
                Kamis, 16 Desember 2024, 14: 00{" "}
              </h2>
              <div className="flex">
                <img src={lokasi} />
                <h1 className="ml-3 text-grey-tulisan">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <hr></hr>
      </div>
      <Footer />
    </>
  )
}
export default Histori

// <div className="mt-10">
//   <div className="justify-left mt-5 flex w-full gap-5">
//     <div class="h-60 w-60 rounded bg-blue-gray-200"></div>
//   </div>
// </div>
