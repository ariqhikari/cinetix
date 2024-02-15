import { useState } from "react";
import { useSelector } from "react-redux";

// services
import { confirmModal, successModal } from "services/general";
import { createReview } from "services/Movie";

// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Button from "components/Button";
import Modal from "components/Modal";

// assets
import ic_transaction_success from "assets/icons/ic_transaction_success.svg";

const TransactionSuccess = () => {
  const { user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(true);
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    confirmModal().then(async (result) => {
      if (result.isConfirmed) {
        try {
          await createReview({
            userId: user.id,
            message,
          });

          setShowModal(false);
          successModal("Success", "Ulasan berhasil disimpan!");
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

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
          <Button type="link" href="/customer/tiket-aktif" isSecondary>
            Tiket Saya
          </Button>
        </div>
      </div>
      <Footer />
      <Modal
        name="Ulasan Pelanggan"
        showModal={showModal}
        setShowModal={(value) => setShowModal(value)}
        body={
          <>
            <form onSubmit={submit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="text-gray-900 block text-sm font-medium leading-6"
                >
                  Nama
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan Nama"
                    value={user?.name}
                    disabled
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Alamat Email
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Masukkan Alamat Email"
                    value={user?.email}
                    disabled
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="text-gray-900 block text-sm font-medium leading-6"
                  >
                    Ulasan
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Masukkan Ulasan"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              <Button type="submit" isBlock isPrimary>
                Kirim
              </Button>
            </form>
          </>
        }
      />
    </>
  );
};
export default TransactionSuccess;
