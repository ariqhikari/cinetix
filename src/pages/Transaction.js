// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Button from "components/Button";

// assets
import ic_arrow_left from "assets/icons/ic_arrow_left.svg";
import ic_wallet from "assets/icons/ic_wallet.svg";

const Pembayaran = () => {
  return (
    <>
      <Navbar />
      <div className="mx-20">
        <h1 className="mb-4 text-3xl font-semibold">KONFIRMASI PEMBAYARAN</h1>
        <p className="text-gray">
          Konfirmasi pembayaran dari kursi yang anda pesan
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="mb-5 text-xl font-medium">Detail Jadwal</h2>
            <p className="text-dark-blue">Judul Film</p>
            <span className="text-xl font-medium">SPIDERMAN NO WAY HOME</span>
            <div className="my-4 h-[1px] bg-blue-gray-100" />

            <p className="text-dark-blue">Tanggal</p>
            <span className="text-xl font-medium">KAMIS, 17 DESEMBER 2021</span>
            <div className="my-4 h-[1px] bg-blue-gray-100" />

            <div className="grid grid-cols-2">
              <div>
                <p className="text-dark-blue">Kelas</p>
                <span className="text-xl font-medium">REGULAR 2D</span>
              </div>
              <div>
                <p className="text-dark-blue">Jam</p>
                <span className="text-xl font-medium">14:40</span>
              </div>
            </div>
            <div className="my-4 h-[1px] bg-blue-gray-100" />

            <p className="text-dark-blue">Tiket (3)</p>
            <span className="text-xl font-medium">C8, C9, C10</span>
            <div className="mt-4 mb-10 h-[1px] bg-blue-gray-100" />

            <div className="flex cursor-pointer gap-4 text-xl font-semibold text-gray">
              <img src={ic_arrow_left} alt="Icon Arrow Left" />
              Kembali
            </div>
          </div>

          <div className="rounded-xl border border-[#C4C4C4] px-6 py-5 shadow">
            <h2 className="mb-5 text-xl font-medium">Ringkasan Order</h2>
            <h4 className="mb-3 font-semibold">Detail Transaksi</h4>
            <div className="mb-1 flex justify-between">
              <span>REGULAR SEAT</span>
              <div className="flex items-center gap-3">
                Rp. 50.000
                <span className="font-semibold text-dark-blue">X3</span>
              </div>
            </div>

            <div className="flex justify-between">
              <span>BIAYA LAYANAN</span>
              <div className="flex items-center gap-3">
                Rp.3.000
                <span className="font-semibold text-dark-blue">X3</span>
              </div>
            </div>

            <div className="my-4 h-[1px] bg-blue-gray-100" />

            <div className="flex justify-between font-semibold">
              <h4>Total Bayar</h4>
              <h4>Rp. 89.000</h4>
            </div>

            <div className="my-4 h-[1px] bg-blue-gray-100" />

            <h4 className="mb-3 font-semibold">Metode Pembayaran</h4>
            <div className="mb-8 flex gap-3">
              <img src={ic_wallet} alt="Icon Wallet" />
              E-Wallet
            </div>

            <p className="mb-4 text-sm text-red">
              *Pembelian tiket tidak dapat dibatalkan
            </p>

            <Button isPrimary isBlock>
              BELI TIKET
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pembayaran;
