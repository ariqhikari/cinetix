// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Schedule = () => {
  return (
    <>
      <Navbar />
      <div className="mx-20">
        <h1 className="mb-4 text-3xl font-semibold">JADWAL</h1>
        <p className="text-gray">Pilih jadwal bioskop yang akan kamu tonton</p>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
