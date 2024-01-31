import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Cboard from "assets/images/Clapperboard.png";

const TransactionSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10 mb-10  justify-center bg-white">
        <h1 className="flex justify-center text-4xl font-semibold">
          Pembayaran berhasil!
        </h1>
        <br></br>
        <div className="flex justify-center">
          <img src={Cboard} />
        </div>
        <div className="mt-10 flex justify-center">
          <p>
            Detail transaksi telah dikirimkan ke email anda, anda juga dapat
            memeriksa
          </p>
        </div>
        <div className="flex justify-center">
          <p>
            rincian tiket lainnya di tiket saya baik di website ataupun
            smartphone anda.
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <button className="border-blue-500 text-grey-tulisan rounded-lg border px-4 py-2">
            Tiket Saya
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TransactionSuccess;
