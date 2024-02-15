import { Card, Typography } from "@material-tailwind/react";

// components
import TFade from "components/Transition/Fade";
import Button from "components/Button";

// assets
import tdumbnail from "assets/images/thumbnail.png";

const DetailMovie = () => {
  const TABLE_HEAD = ["No", "Tanggal", "Waktu", "Aksi"];

  const TABLE_ROWS = [
    {
      no: "1",
      date: "23/04/18",
      time: "08:00",
    },
  ];
  return (
    <>
      <TFade>
        <div className="mx-5 lg:mx-20">
          <h1 className="mb-12 text-3xl font-semibold">DETAIL FILM</h1>

          <div className="mb-14">
            <img
              src={tdumbnail}
              alt="tdumbnail"
              className="mb-10 h-[214px] w-[413px] rounded-lg object-cover"
            />

            <h5 className="mb-5 text-xl font-medium text-accent-black">
              SPIDERMAN : NO WAY HOME
            </h5>

            <table>
              <tr>
                <td className="pr-10">Genre</td>
                <td>Action</td>
              </tr>
              <tr>
                <td className="pr-10">Durasi</td>
                <td>2 jam 28 menit</td>
              </tr>
              <tr>
                <td className="pr-10">Sutradara</td>
                <td>Jon Watts</td>
              </tr>
              <tr>
                <td className="pr-10">Rating Usia</td>
                <td>R13+</td>
              </tr>
            </table>
          </div>

          <div>
            <div className="mb-5 grid grid-cols-2 place-content-between items-center gap-4">
              <h5 className="text-xl font-medium text-accent-black">
                Jadwal Tayang Film
              </h5>
              <Button isSecondary>+</Button>
            </div>

            <Card className="h-full w-full overflow-scroll">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ no, date, time }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={no}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {no}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {time}
                          </Typography>
                        </td>
                        <td
                          className={`${classes} flex flex-row gap-5 bg-blue-gray-50/50`}
                        >
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                          >
                            Edit
                          </Typography>
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium"
                          >
                            Delete
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </TFade>
    </>
  );
};

export default DetailMovie;
