import Navbar from "components/Navbar";
import Footer from "components/Footer";
import stars from "assets/images/star filled.png";
import arrowLeft from "assets/images/arrow-kiri.png";

const Pembayaran = () => {
  return (
    <>
      <Navbar />
      <div
        className="justify-left mb-10 mt-0 flex min-h-screen  items-center"
        style={{ marginTop: "-10px" }}
      >
        <div className="flex w-full flex-col items-center rounded-md bg-white p-8 lg:w-4/5 lg:flex-row lg:items-start">
          <div className="mb-7 text-center lg:mb-0 lg:w-1/2 lg:text-left">
            <h1
              className="mb-10 mt-10 text-4xl font-bold"
              style={{ marginTop: "10px" }}
            >
              Konfirmasi Pembayaran
            </h1>

            {/* Detail Jadwal */}
            <div className="mb-4 mt-20">
              <h2 className="mb-2 text-lg font-semibold">Detail Jadwal</h2>
              <p>Judul Film:</p>
              <span className="text-lg font-semibold">SPIDERMAN SHELBY</span>
              <hr className="border-blue-gray-400"></hr>
              <br></br>
              <p>Tanggal:</p>
              <span className="font-semibold">SENIN, 23 Oktober 2024</span>
              <hr className="border-blue-gray-400"></hr>
              <br></br>
              <tr>
                <td>
                  <p>Kelas:</p>
                  <span className="font-semibold">GOLD CLASS 2D</span>
                </td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <p>Jam:</p>
                  <span className="font-semibold">14:00</span>
                </td>
                {/* <hr className="border-blue-gray-400"></hr> */}
              </tr>
              <hr className="border-blue-gray-400"></hr>
              <br></br>

              <div className="mt-2">
                <p>
                  Tiket <span className="">(3)</span>
                </p>
                <span className="font-semibold">C8, C9, C10</span>
                <hr className="border-blue-gray-400"></hr>
              </div>
              <div></div>
            </div>
            <div className="ml justify-left mt-12 flex">
              <img src={arrowLeft} />
              <button className="text-blue-500 ml-8 underline">Kembali</button>
            </div>
          </div>

          {/* Ringkasan Order */}
          <div
            className="mt-20 lg:ml-auto lg:w-1/2 lg:pl-8"
            style={{ marginTop: "130px" }}
          >
            <h2 className="mb-2 text-lg font-semibold">Ringkasan Order</h2>
            <h2 className="mb-0 text-lg font-semibold">Detail Transaksi</h2>
            <div className="mb-2 flex justify-between">
              <p>Regular seat</p>
              <p className="ml-80 ">Rp 70.000</p>
              <p className="text-grey-tulisan">x3</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p>Biaya Layanan</p>

              <p className="ml-80">Rp 3.000</p>
              <p className="text-grey-tulisan">x3</p>
            </div>
            <br></br>
            <hr className="border-blue-gray-400"></hr>
            <br></br>
            <div className="mb-2 text-lg font-semibold">
              <p>Promo & Voucher</p>
            </div>
            <div className="flex justify-between">
              <p>VOUCHER CinéTix</p>
              <p>- Rp. 70.000</p>
            </div>
            <br></br>
            <hr className="border-blue-gray-400"></hr>
            <div className="mb-2  pt-2">
              <div className="flex justify-between font-semibold">
                <p>Total Bayar</p>
                <p>Rp 70.000</p>
              </div>
              <br></br>
              <hr className="border-blue-gray-400"></hr>
              <br></br>
            </div>

            {/* Metode Pembayaran */}
            <div className="mb-4 ">
              <h2 className="mb-2 text-lg font-semibold">Metode Pembayaran</h2>
              <div className="flex">
                <img src={stars} />
                <p className="ml-3 font-semibold">E-Wallet</p>
              </div>
              <hr className="border-blue-gray-400"></hr>
              <div className="mt-10">
                <a className="text-grey-tulisan">
                  *Pembelian tiket tidak bisa dibatalkan{" "}
                </a>
              </div>
            </div>

            {/* Button Beli Tiket */}
            <div className="flex justify-center">
              <button className="bg-greybutton rounded-lg px-4 py-2 text-white">
                Beli Tiket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Pembayaran;
