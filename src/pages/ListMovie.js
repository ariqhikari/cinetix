import { useEffect, useState } from "react";

// services
import { getNowPlaying } from "services/Movie";

// components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MovieItem from "components/MovieItem";

const ListMovie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getNowPlaying();
      setData(response.data.body.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-5 flex justify-between lg:mx-20">
        <div>
          <h4 className="text-xl font-semibold">Daftar Film</h4>
          <p>Terbanglah ke dunia film bersama CinéTix, temukan dengan mudah!</p>
        </div>
      </div>
      <div className="mx-5 my-14 grid gap-5 md:grid-cols-2 lg:mx-20 lg:grid-cols-3">
        {data.map((movie, index) => (
          <MovieItem key={`movie-${index}`} data={movie} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ListMovie;
