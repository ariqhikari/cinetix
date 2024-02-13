import Navbar from "components/Navbar";
import Footer from "components/Footer";
import thumbnail from "assets/images/thumbnail.png";

const ListFilm = () => {
  return (
    <>
      <Navbar />
      <div className="mx-5 flex justify-between lg:mx-20">
        <div>
          <h4 className="text-xl font-semibold">Daftar Film</h4>
          <p>Terbanglah ke dunia film bersama CinéTix, temukan dengan mudah!</p>
        </div>
      </div>
      <div className="mx-5 my-14 grid gap-5 md:grid-cols-2 lg:mx-20 lg:grid-cols-3">
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[600px] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[600px] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[600px] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 my-14 grid gap-5 md:grid-cols-2 lg:mx-20 lg:grid-cols-3">
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[600px] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[600px] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-[600px] w-full rounded-2xl object-cover"
          />
          <h2 className="mt-6 text-center text-xl font-bold">
            Spiderman : No Way Home
          </h2>
          <div className="mt-5 flex w-full justify-center gap-4">
            <div className="rounded bg-yellow px-2 py-1 text-white">Action</div>
            <div className="rounded bg-yellow px-2 py-1 text-white">
              Fantasy
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ListFilm;
