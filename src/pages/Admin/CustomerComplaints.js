// componen
import TFade from "components/Transition/Fade"

// asset

import tesfoto from "assets/images/thumbnail.png"

const CustomerComplaints = () => {
  return (
    <TFade>
      <div className=" justtify-start flex">
        <div className=" justify-center ">
          <div className="mb-10  gap-7 text-center">
            <p className="text-4xl font-semibold">Keluhan Pelanggan</p>
          </div>
          {/*  */}
          <div className=" justify-arround mt-6 flex">
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-10 justify-items-start gap-10">
                <div className="cols-start-1">
                  <div
                    className="h-20 w-20  overflow-hidden rounded-full"
                    // style={{ width: "180px" }}
                  >
                    <img src={tesfoto} />
                  </div>
                </div>
                <div className="col-span-10 col-start-3 ml-2">
                  <b>Ariq Hikari hikari</b>
                  <div className="col-start-3 text-gray">
                    Keterbatasan pemilihan pembayaran yang diseediakan
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/*  */}
          <div className=" justify-arround mt-6 flex">
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-10 justify-items-start gap-10">
                <div className="cols-start-1">
                  <div
                    className="h-20 w-20  overflow-hidden rounded-full"
                    // style={{ width: "180px" }}
                  >
                    <img src={tesfoto} />
                  </div>
                </div>
                <div className="col-span-10 col-start-3 ml-2">
                  <b>Adisya Ainun</b>
                  <div className="col-start-3 text-gray">
                    Kesulitan selama proses pembayaran
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/* insert here */}
          <div className=" justify-arround mt-6 flex">
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-10 justify-items-start gap-10">
                <div className="cols-start-1">
                  <div
                    className="h-20 w-20  overflow-hidden rounded-full"
                    // style={{ width: "180px" }}
                  >
                    <img src={tesfoto} />
                  </div>
                </div>
                <div className="col-span-10 col-start-3 ml-2">
                  <b>Erwin Hafizz</b>
                  <div className="col-start-3 text-gray">
                    Website mengalami lag atau keterlambatan respons
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/*  */}
          <div className=" justify-arround mt-6 flex">
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-10 justify-items-start gap-10">
                <div className="cols-start-1">
                  <div
                    className="h-20 w-20  overflow-hidden rounded-full"
                    // style={{ width: "180px" }}
                  >
                    <img src={tesfoto} />
                  </div>
                </div>
                <div className="col-span-10 col-start-3 ml-2">
                  <b>Farid_raja_mesir</b>
                  <div className="col-start-3 text-gray">
                    Kesalahan teknis seperti halaman yang tidak dapat dimuat
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/*  */}
          <div className=" justify-arround mt-6 flex">
            <div className="" style={{ width: "550px" }}>
              <div className="grid  grid-cols-10 justify-items-start gap-10">
                <div className="cols-start-1">
                  <div
                    className="h-20 w-20  overflow-hidden rounded-full"
                    // style={{ width: "180px" }}
                  >
                    <img src={tesfoto} />
                  </div>
                </div>
                <div className="col-span-10 col-start-3 ml-2">
                  <b>Naufallonely</b>
                  <div className="col-start-3 text-gray">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem
                    ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                    ipsumlorem ipsum
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
        </div>
        {/* insert new here */}
      </div>
    </TFade>
  )
}
export default CustomerComplaints
