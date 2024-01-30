import Navbar from "components/Navbar"
import Footer from "components/Footer"
import foto from "assets/images/github.png"
import banner from "assets/images/banner.png"
import thumbnail from "assets/images/thumbnail.png"
const List_film = () => {
  return (
    <>
      <Navbar />
      <div className=" justtify-between ml-10 mt-5">
        <h4 className="text-xl font-semibold">Daftar Film</h4>
        {/* <p>Jelajahi dan temukan film bersama CinéTix, pasti mudah!</p> */}
        <p>Terbanglah ke dunia film bersama CinéTix, temukan dengan mudah!</p>
      </div>
      <div class="mx-40 my-14 grid grid-cols-3 gap-4">
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[75vh] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
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
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
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
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
          </div>
        </div>
      </div>
      {/* SS */}
      <div class="mx-40 my-14 grid grid-cols-3 gap-4">
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[75vh] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
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
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
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
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
          </div>
        </div>
      </div>
      {/* SS */}
      <div class="mx-40 my-14 grid grid-cols-3 gap-4">
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[75vh] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
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
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
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
          <div className="mt-5 flex w-full justify-center gap-5">
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
            <div class="h-6 w-10 rounded bg-blue-gray-200"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default List_film
