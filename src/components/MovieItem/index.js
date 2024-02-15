import propTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const { data } = props;

  return (
    <Link to={`/jadwal?id=${data.id}`}>
      <img
        src={data.poster}
        alt={data.title}
        className="h-[600px] w-full rounded-2xl bg-light-gray object-cover"
      />
      <h2 className="mt-6 text-center text-xl font-bold">{data.title}</h2>
      <div className="mt-5 flex w-full justify-center gap-4">
        {data.genres.map((genre, index) => (
          <div
            key={`genre-${index}`}
            className="rounded bg-yellow px-2 py-1 text-white"
          >
            {genre}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  data: propTypes.object.isRequired,
};
