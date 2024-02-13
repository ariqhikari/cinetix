// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Button from "components/Button";

// assets
import ic_transaction_success from "assets/icons/ic_transaction_success.svg";

const TransactionSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10 mb-10">
        <h1 className="mb-4 text-center text-4xl font-semibold">
          Pembayaran berhasil!
        </h1>
        <div className="mb-4 flex justify-center">
          <img src={ic_transaction_success} alt="Icon Transaction Success" />
        </div>
        <p className="text-center text-gray">
          Detail transaksi telah dikirimkan ke email anda, anda juga dapat
          memeriksa <br /> rincian tiket lainnya di tiket saya baik di website
          ataupun smartphone anda.
        </p>
        <div className="mt-5 flex justify-center">
          <Button isSecondary>Tiket Saya</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TransactionSuccess;
