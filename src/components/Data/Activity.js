import { useEffect, useState } from "react";
import moment from "moment";

// services
import { getActivities } from "services/User";

// components
import TFade from "components/Transition/Fade";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import InputDate from "components/Form/InputDate";

const Activity = () => {
  const [firstDate, setFirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const dataActivities = await getActivities();
      setActivities(dataActivities.data.body.data.activities);
    } catch (error) {
      setActivities([]);
    }
  };

  return (
    <TFade>
      <Navbar title="Aktivitas" />
      {/* Filter */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-2xl font-medium">Filter Tanggal</h3>
        <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">
          <InputDate
            name="firstDate"
            value={firstDate}
            required={false}
            placeholder="Tanggal Awal"
            inputClassName="w-full"
            isSmall
            onChange={(value) => setFirstDate(value)}
          />

          <svg
            className="mx-3 hidden md:block"
            width="20"
            height="2"
            viewBox="0 0 20 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="2" fill="#191919" fillOpacity="0.5" />
          </svg>

          <InputDate
            name="lastDate"
            value={lastDate}
            required={false}
            placeholder="Tanggal Akhir"
            inputClassName="w-full"
            isSmall
            onChange={(value) => setLastDate(value)}
          />
        </div>
      </div>

      {/* List Activity */}
      {activities.map((activity, index) => (
        <div
          key={`activity-${index}`}
          className="mb-4 rounded-[20px] border-2  border-transparent bg-white p-5 transition hover:border-primary-yellow"
        >
          <h5 className="text-xl font-medium">{activity.title}</h5>
          <span className="text-base text-accent-gray">
            {moment(activity.createdAt).startOf("hour").fromNow()}
          </span>
        </div>
      ))}

      {!activities.length && (
        <span className="block text-center font-medium text-accent-gray">
          Data tidak ada.
        </span>
      )}

      <Footer />
    </TFade>
  );
};

export default Activity;
