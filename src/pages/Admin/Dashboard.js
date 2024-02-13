// components
import TFade from "components/Transition/Fade";

// assets
import chart from "assets/images/chart.png";

const Dashboard = () => {
  return (
    <TFade>
      <h1 className="mb-3 text-2xl font-semibold">Pemasukkan Perusahaan</h1>
      <p className="text-gray">
        Daftar histori transaksi dan histori pengeluaran perusahaan dalam skala
        waktu
      </p>

      <img src={chart} alt="Chart" />
    </TFade>
  );
};

export default Dashboard;
