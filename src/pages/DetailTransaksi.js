import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Back from 'assets/images/Back.png';

const DetailTransaksi = () => {
  return (
    <>
      <Navbar />
      <div className="text-2xl font-bold mb-6 text-center bg-transparent">Detail Transaksi</div>
      <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-[600px] w-full mt-10 mb-10">
          <div className="w-full h-[200px] flex flex-col bg-[#1A2C50] rounded-t-md">
            <div className="flex items-center font-bold mb-2">
            <div className="text-orange-300 text-2xl font-medium leading-loose ml-4 mt-1">Spiderman: No Way Home</div>
            </div>
            <div className="flex">
            <div className="info-row flex mb-2">
                <div className="text-lg mr-4 ml-4">
                <div className="text-lg text-[#9DA8BE]">Lokasi</div>
                <div className="text-lg font-medium text-white">Grand Indonesia</div>
                </div>
            </div>
            <div className="info-row flex mb-2">
                <div className="text-lg ml-20">
                <div className="text-lg text-[#9DA8BE] ml-11">Kelas</div>
                <div className="text-lg font-medium text-white ml-11">Regular 2D</div>
                </div>
            </div>
            </div>
            <div className="flex">
            <div className="info-row flex mb-2">
                <div className="text-lg mr-4 ml-4">
                <div className="text-lg text-[#9DA8BE]">Tanggal</div>
                <div className="text-lg font-medium text-white">16 Desember 2023</div>
                </div>
            </div>
            <div className="info-row flex mb-2">
                <div className="text-lg mr-4">
                <div className="text-lg text-[#9DA8BE] ml-7">Jam</div>
                <div className="text-lg font-medium text-white ml-7">14:00</div>
                </div>
            </div>
            <div className="info-row flex mb-2">
                <div className="text-lg mr-4">
                <div className="text-lg text-[#9DA8BE] ml-4">Studio</div>
                <div className="text-lg font-medium text-white ml-4">Studio 1</div>
                </div>
            </div>
            </div>
          </div>
          <div className="w-full flex flex-col bg-[#F2C46F] rounded-b-md">
          <div class="w-[600px] h-[100px] mt-2">
            <div class="booking-info ml-4">
                    <div class="text-lg inline-block">Kode Booking</div>
                    <div class="text-lg ml-7 inline-block">037491740184392</div>
                </div>
                <div class="booking-info ml-4">
                    <div class="text-lg inline-block">Password Key</div>
                    <div class="text-lg ml-8 inline-block">147294</div>
                </div>
                <div class="booking-info ml-4">
                  <div class="text-lg inline-block">Kursi</div>
                  <div class="text-lg inline-block ml-28">C8, C9, C10</div>
                </div>
            </div>
          </div>
          <div class="text-black text-2xl font-medium leading-loose">Rincian Pembelian</div>
            <div class="w-full flex justify-between items-start">
            <div class="text-zinc-800 text-base font-normal">REGULAR SEAT</div>
            <div class="justify-start items-start gap-3 flex">
                <div class="text-right text-zinc-800 text-base font-normal leading-normal">Rp. 70.000</div>
                <div class="text-right text-slate-600 text-base font-bold">X3</div>
            </div>
            </div>
            <div class="w-full flex justify-between items-start">
            <div class="text-zinc-800 text-base font-normal">NO ORDER</div>
            <div class="justify-start items-start gap-3 flex">
                <div class="text-right text-zinc-800 text-base font-normal leading-normal">Rp. 70.000</div>
                <div class="text-right text-slate-600 text-base font-bold">X3</div>
            </div>
            </div>
            <div class="w-full flex justify-between items-start">
            <div class="text-zinc-800 text-base font-normal">BIAYA LAYANAN</div>
            <div class="justify-start items-start gap-3 flex">
                <div class="text-right text-zinc-800 text-base font-normal leading-normal">Rp. 3.000</div>
                <div class="text-right text-slate-600 text-base font-bold">X3</div>
            </div>
            </div>
            <div class="w-full flex justify-between items-start">
            <div class="text-zinc-800 text-base font-normal">PROMO CinéTix</div>
            <div class="justify-start items-start gap-3 flex">
            <div className="flex gap-3 items-start">
              <div className="text-right text-zinc-800 text-base font-bold">Rp. 129.000</div>
            </div>
            </div>
        </div>
          <hr className="my-4" />
          <div className="w-full flex justify-between items-start">
            <div className="text-zinc-800 text-base font-normal">TOTAL PEMBAYARAN</div>
            <div className="flex gap-3 items-start">
              <div className="text-right text-zinc-800 text-base font-bold">Rp. 129.000</div>
            </div>
          </div>
          <div className="w-full h-px bg-zinc-200 my-4"></div>
          <div className="w-36 h-8 flex justify-start items-center">
            <img className='w-4 h-4 ml-2' src={Back}></img>
            <div className="w-8 h-8 pl-1.5 pr-[6.50px] py-[8.50px] rounded justify-center items-center flex"></div>
            <button className="text-blue-900 text-2xl font-bold">Kembali</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailTransaksi;