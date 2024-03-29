import Navbar from "components/Navbar";
import Footer from "components/Footer";
import tiketaktif from "assets/images/Vector.png";
import dftrtrnsksi from "assets/images/Group 43.png";
import lokasi from "assets/images/lokasi.png";
const DaftarTransaksi = () => {
  return (
    <>
      <Navbar />
      <div className=" justtify-between flex">
        {/* Kiri */}
        <div
          className="ml-10 mt-10  justify-center bg-sidebar"
          style={{ width: "300px" }}
        >
          <div className="flex justify-center">
            <img src={tiketaktif} className="ml-1 mt-2" />
            <button className="text-blue-500 text-s ml-5 font-bold ">
              TIKET AKTIF
            </button>
          </div>
          <br></br>
          <hr className="border-blue-gray-100"></hr>
          <br></br>
          <div className="flex justify-center">
            <img src={dftrtrnsksi} className="ml-1 mt-0" />
            <button className="text-blue-500 text-s ml-5 font-bold ">
              DAFTAR TRANSAKSI
            </button>
          </div>
        </div>
        {/* Kanan */}
        <div className="ml-20 mt-10 justify-center ">
          <p className="text-2xl font-semibold">Riwayat Tiket Saya</p>
          <p>Daftar tiket dan transaksi yang pernah anda lakukan</p>
          <div className=" justify-arround mt-20 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                Spiderman:No Way
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/* insert here */}
          <div className=" justify-arround mt-20 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                Tenet
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/* insert here */}
          <div className=" justify-arround mt-20 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                Tenet
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/*  */}
          <div className=" justify-arround mt-20 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                John Wick: Chapter 3 - Parabellum
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/*  */}
          <div className=" justify-arround mt-20 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                Spiderman:No Way x John Wick: Chapter 3 - Parabellum
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
        </div>
        {/* Insert new here  */}
        {/* Insert new here  */}
      </div>
      <Footer />
    </>
  );
};
export default DaftarTransaksi;
