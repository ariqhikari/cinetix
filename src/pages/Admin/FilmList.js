// componen
import TFade from "components/Transition/Fade"

// asset
import lokasi from "assets/images/lokasi.png"
import View from "assets/images/Viewicon.png"
import Edit from "assets/images/Editicon.png"
import Delete from "assets/images/Deleteicon.png"
import InsertNew from "assets/images/insertNew.png"

import Elipse from "assets/images/Exlipse.png"

const ListFilmAdmin = () => {
  return (
    <TFade>
      <div className=" justtify-start flex">
        <div className=" justify-center ">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-start-1">
              <p className="text-2xl font-semibold">Daftar Film</p>
            </div>
            <div className="col-span-2 col-end-10">
              <button>
                <img src={InsertNew}></img>
              </button>
            </div>
          </div>
          {/*  */}
          <div className=" justify-arround mt-6 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <div className="grid  grid-cols-6 gap-4"></div>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                Spiderman:No Way
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="ml-8 grid grid-cols-10 justify-items-start">
                <div className="cols-start-1">Action</div>
                <div className="cols-start-2 col-end-4">
                  <img className="mt-2 " src={Elipse}></img>
                </div>
                <div className="col-start-4 col-end-8">2 Hour 30 Minute</div>
                <div className="cols-start-9">
                  <img className="mt-2" src={Elipse} />
                </div>
                <div className="cols-start-10">17+</div>
              </div>

              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>

            <button className="mr-2 mb-10">
              <img src={View}></img>
            </button>
            <button className="mr-2 mb-10">
              <img src={Edit}></img>
            </button>
            <button className="mr-2 mb-10">
              <img src={Delete}></img>
            </button>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/*  */}
          <div className=" justify-arround mt-20 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <div className="grid  grid-cols-6 gap-4"></div>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                Spiderman:No Way
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="ml-8 grid grid-cols-10 justify-items-start">
                <div className="cols-start-1">Action</div>
                <div className="cols-start-2 col-end-4">
                  <img className="mt-2 " src={Elipse}></img>
                </div>
                <div className="col-start-4 col-end-8">2 Hour 30 Minute</div>
                <div className="cols-start-9">
                  <img className="mt-2" src={Elipse} />
                </div>
                <div className="cols-start-10">17+</div>
              </div>

              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>

            <button className="mr-2 mb-10">
              <img src={View}></img>
            </button>
            <button className="mr-2 mb-10">
              <img src={Edit}></img>
            </button>
            <button className="mr-2 mb-10">
              <img src={Delete}></img>
            </button>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/* insert here */}
          {/*  */}
          <div className=" justify-arround mt-20 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <div className="grid  grid-cols-6 gap-4"></div>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                Spiderman:No Way
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="ml-8 grid grid-cols-10 justify-items-start">
                <div className="cols-start-1">Action</div>
                <div className="cols-start-2 col-end-4">
                  <img className="mt-2 " src={Elipse}></img>
                </div>
                <div className="col-start-4 col-end-8">2 Hour 30 Minute</div>
                <div className="cols-start-9">
                  <img className="mt-2" src={Elipse} />
                </div>
                <div className="cols-start-10">17+</div>
              </div>

              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>

            <button className="mr-2 mb-10">
              <img src={View}></img>
            </button>
            <button className="mr-2 mb-10">
              <img src={Edit}></img>
            </button>
            <button className="mr-2 mb-10">
              <img src={Delete}></img>
            </button>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
          {/*  */}
          <div className=" justify-arround mt-20 flex">
            <div
              class="h-60 w-60 rounded  bg-blue-gray-200"
              style={{ width: "180px" }}
            ></div>
            <div className="" style={{ width: "450px" }}>
              <div className="grid  grid-cols-6 gap-4"></div>
              <h2 className="text-s mt-10 ml-8  bg-white text-justify font-bold">
                Spiderman:No Way
              </h2>
              <h2 className="text-s mt-0 ml-8  font-bold">
                Kamis, 16 Desember 2024, 14: 00
              </h2>
              <div className="ml-8 grid grid-cols-10 justify-items-start">
                <div className="cols-start-1">Action</div>
                <div className="cols-start-2 col-end-4">
                  <img className="mt-2 " src={Elipse}></img>
                </div>
                <div className="col-start-4 col-end-8">2 Hour 30 Minute</div>
                <div className="cols-start-9">
                  <img className="mt-2" src={Elipse} />
                </div>
                <div className="cols-start-10">17+</div>
              </div>

              <div className="mt-1 ml-10 flex">
                <img src={lokasi} />
                <h1 className="text-grey-tulisan ml-3">CinéTix</h1>
                <h1 className="ml-3 font-bold">(Regular 2D)</h1>{" "}
              </div>
            </div>

            <button className="mr-2 mb-10">
              <img src={View}></img>
            </button>
            <button className="mr-2 mb-10">
              <img src={Edit}></img>
            </button>
            <button className="mr-2 mb-10">
              <img src={Delete}></img>
            </button>
          </div>
          <hr className="mt-8 border-blue-gray-100"></hr>
        </div>
        {/* insert */}
      </div>
    </TFade>
  )
}
export default ListFilmAdmin
