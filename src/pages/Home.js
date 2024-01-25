// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

// assets
import thumbnail from "assets/images/thumbnail.png";
import banner from "assets/images/banner.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="mx-80 mt-10 grid grid-cols-2 gap-4">
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
  );
};

export default Home;
