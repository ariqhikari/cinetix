import { useState } from "react";

// components
import TFade from "components/Transition/Fade";
import InputDate from "components/Form/InputDate";

// assets
import ic_megaphone_blue from "assets/icons/ic_megaphone_blue.svg";
import ic_user from "assets/icons/ic_user.svg";

const Notification = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <TFade>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <h5 className="mb-3 text-lg font-medium">Tanggal Awal Filter</h5>

          <InputDate
            name="startDate"
            value={startDate}
            placeholder="Tanggal Awal Filter"
            onChange={(value) => setStartDate(value)}
          />
        </div>

        <div>
          <h5 className="mb-3 text-lg font-medium">Tanggal Akhir Filter</h5>

          <InputDate
            name="endDate"
            value={endDate}
            placeholder="Tanggal Akhir Filter"
            onChange={(value) => setEndDate(value)}
          />
        </div>
      </div>

      <div className="card my-5 flex !justify-between rounded-2xl">
        <div className="flex gap-3">
          <div className="icon !bg-[#00C2FF33]">
            <img src={ic_megaphone_blue} alt="Icon Megaphone" />
          </div>

          <div>
            <h5 className="text-xl font-medium">
              Reservasi Ruangan kamu untuk tanggal 19 <br /> November 2023
              ditolak
            </h5>
            <div className="mt-1 flex items-center gap-2 text-sm font-medium">
              <img src={ic_user} alt="Icon User" />
              Administrator
            </div>
          </div>
        </div>

        <span className="self-start text-lg font-medium text-primary-yellow">
          Baru Saja
        </span>
      </div>

      <div className="card my-5 flex !justify-between rounded-2xl">
        <div className="flex gap-3">
          <div className="icon !bg-[#00C2FF33]">
            <img src={ic_megaphone_blue} alt="Icon Megaphone" />
          </div>

          <div>
            <h5 className="text-xl font-medium">
              Reservasi Ruangan kamu untuk tanggal 19 <br /> November 2023
              ditolak
            </h5>
            <div className="mt-1 flex items-center gap-2 text-sm font-medium">
              <img src={ic_user} alt="Icon User" />
              Administrator
            </div>
          </div>
        </div>

        <span className="self-start text-lg font-medium text-primary-yellow">
          Baru Saja
        </span>
      </div>

      <div className="card my-5 flex !justify-between rounded-2xl">
        <div className="flex gap-3">
          <div className="icon !bg-[#00C2FF33]">
            <img src={ic_megaphone_blue} alt="Icon Megaphone" />
          </div>

          <div>
            <h5 className="text-xl font-medium">
              Reservasi Ruangan kamu untuk tanggal 19 <br /> November 2023
              ditolak
            </h5>
            <div className="mt-1 flex items-center gap-2 text-sm font-medium">
              <img src={ic_user} alt="Icon User" />
              Administrator
            </div>
          </div>
        </div>

        <span className="self-start text-lg font-medium text-primary-yellow">
          Baru Saja
        </span>
      </div>
    </TFade>
  );
};

export default Notification;
