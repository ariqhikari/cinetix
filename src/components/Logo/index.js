// assets
import logo from "assets/images/logo.png";

const Logo = () => {
  return (
    <div className="card card-full flex items-center gap-2 uppercase">
      <img src={logo} alt="Universitas Padjadjaran" />
      <div>
        <h1 className="text-lg font-semibold">
          Sistem Pengelolaan Pelaksanaan Sidang Akhir Sarjana
        </h1>
        <p className="text-sm">
          Fakultas Ekonomi dan Bisnis Universitas Padjadjaran
        </p>
      </div>
    </div>
  );
};

export default Logo;
