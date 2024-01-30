import Footer from "components/Footer";
import Navbar from "components/Navbar";

const ChoosingSeats = () => {
  return (
    <>
      <Navbar />
      <div className="mx-20">
        <h1 className="mb-4 text-3xl font-semibold">PILIH KURSI</h1>
        <p className="text-gray">
          Pilih kursi yang akan kamu tempati selama pemutaran film
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ChoosingSeats;
