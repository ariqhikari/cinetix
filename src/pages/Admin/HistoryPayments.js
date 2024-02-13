// componen
import TFade from "components/Transition/Fade"

// asset
import lokasi from "assets/images/lokasi.png"
import UserProfile from "assets/images/Profiladmin.png"

const HistoryPayments = () => {
  return (
    <TFade>
      <div className=" justtify-start flex">
        <div className=" justify-center ">
          <p className=" text-3xl font-semibold">Histori Pembayaran</p>
          {/*  */}
          <div className=" justify-arround mt-8 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-6 gap-4"></div>
              <h2 className="mt-4 ml-8 text-xl  font-semibold">
                Spiderman: No Way Home
              </h2>
              <h2 className="text-s mt-2 ml-8 mb-4 font-light">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 mb-4 flex">
                <button>
                  <img src={UserProfile} />
                </button>
                <h1 className="ml-3 font-light text-blue-gray-200">
                  Ariq HikariHikariHikariHikari
                </h1>
              </div>
              <div className="mt-1 ml-10 flex">
                <button>
                  <img src={lokasi} />
                </button>
                <h1 className="ml-3 text-blue-gray-200">CinéTix</h1>
                <h1 className="text-s ml-3 font-semibold">(Regular 2D)</h1>
              </div>
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/*  */}
          <div className=" justify-arround mt-8 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-6 gap-4"></div>
              <h2 className="mt-4 ml-8 text-xl  font-semibold">
                Spiderman: No Way Home
              </h2>
              <h2 className="text-s mt-2 ml-8 mb-4 font-light">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 mb-4 flex">
                <button>
                  <img src={UserProfile} />
                </button>
                <h1 className="ml-3 font-light text-blue-gray-200">
                  Ariq HikariHikariHikariHikari
                </h1>
              </div>
              <div className="mt-1 ml-10 flex">
                <button>
                  <img src={lokasi} />
                </button>
                <h1 className="ml-3 text-blue-gray-200">CinéTix</h1>
                <h1 className="text-s ml-3 font-semibold">(Regular 2D)</h1>
              </div>
            </div>
          </div>

          <hr className="mt-8 border-blue-gray-100"></hr>
          {/* insert here */}
          <div className=" justify-arround mt-8 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-6 gap-4"></div>
              <h2 className="mt-4 ml-8 text-xl  font-semibold">
                Spiderman: No Way Home
              </h2>
              <h2 className="text-s mt-2 ml-8 mb-4 font-light">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 mb-4 flex">
                <button>
                  <img src={UserProfile} />
                </button>
                <h1 className="ml-3 font-light text-blue-gray-200">
                  Ariq HikariHikariHikariHikari
                </h1>
              </div>
              <div className="mt-1 ml-10 flex">
                <button>
                  <img src={lokasi} />
                </button>
                <h1 className="ml-3 text-blue-gray-200">CinéTix</h1>
                <h1 className="text-s ml-3 font-semibold">(Regular 2D)</h1>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" justify-arround mt-8 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-6 gap-4"></div>
              <h2 className="mt-4 ml-8 text-xl  font-semibold">
                Spiderman: No Way Home
              </h2>
              <h2 className="text-s mt-2 ml-8 mb-4 font-light">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="mt-1 ml-10 mb-4 flex">
                <button>
                  <img src={UserProfile} />
                </button>
                <h1 className="ml-3 font-light text-blue-gray-200">
                  Ariq HikariHikariHikariHikari
                </h1>
              </div>
              <div className="mt-1 ml-10 flex">
                <button>
                  <img src={lokasi} />
                </button>
                <h1 className="ml-3 text-blue-gray-200">CinéTix</h1>
                <h1 className="text-s ml-3 font-semibold">(Regular 2D)</h1>
              </div>
            </div>
          </div>

          <hr className="mt-8 border-blue-gray-100"></hr>
          {/* insert */}
        </div>
      </div>
    </TFade>
  )
}
export default HistoryPayments
// <div className=" grid grid-cols-2 justify-items-stretch ">
//   <div className="col-start-2">
//     <img src={UserProfile} />
//   </div>
//   <div className="col-span-4 col-start-3 col-end-6 bg-blue-gray-200">
//     <b>Arqqqqqqqq Hikari</b>
//   </div>
// </div>
