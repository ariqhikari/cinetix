const Pembayaran = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full flex-col items-center rounded-md bg-white p-8 shadow-md lg:w-4/5 lg:flex-row lg:items-start">
        <div className="mb-7 text-center lg:mb-0 lg:w-1/2 lg:text-left">
          <h1 className="mb-1 text-4xl font-bold">Konfirmasi Pembayaran</h1>

          {/* Detail Jadwal */}
          <div className="mb-4">
            <h2 className="mb-2 text-lg font-semibold">Detail Jadwal</h2>
            <p>Judul Film:</p>
            <span className="text-lg underline">SPIDERMAN SHELBY</span>
            <p>Tanggal:</p>
            <span className="underline">SENIN, 23 Oktober 2024</span>
            <tr>
              <td>
                <p>Kelas:</p>
                <span className="underline">GOLD CLASS 2D</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <p>Jam:</p>
                <span className="underline">14:00</span>
              </td>
            </tr>

            <div className="mt-2">
              <p>
                Tiket <span className="underline">(3)</span>
              </p>
              <span className="underline">C8, C9</span>
            </div>
            <div></div>
          </div>
          <div className="ml mt-12 flex justify-between">
            <button className="text-blue-500 underline">Kembali</button>
          </div>
        </div>

        {/* Ringkasan Order */}
        <div className="mt-10 lg:ml-auto lg:w-1/2 lg:pl-8">
          <h2 className="mb-2 text-lg font-semibold">Ringkasan Order</h2>
          <h2 className="mb-4 text-lg font-semibold">Detail Transaksi</h2>
          <div className="mb-2 flex justify-between">
            <p>Regular seat</p>
            <p>Rp 70,000 x 3</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p>Biaya Layanan</p>
            <p>Rp 3,000 x 3</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p>Promo & Voucher</p>
            <p>Kode Promo</p>
          </div>
          <div className="border-gray-300 mb-2 border-t pt-2">
            <div className="flex justify-between font-semibold">
              <p>Total Bayar</p>
              <p>Rp 210,000</p>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div className="mb-4">
            <h2 className="mb-2 text-lg font-semibold">Metode Pembayaran</h2>
            <p>E-Wallet</p>
          </div>

          {/* Button Beli Tiket */}
          <div className="flex justify-end">
            <button className="rounded-md bg-medium-gray px-4 py-2 text-white">
              Beli Tiket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
