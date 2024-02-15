import axios from "axios";

// services
import headers from "services/Headers";

const getNowPlaying = () => {
  return axios.get(`${process.env.REACT_APP_API}/movies/now-playing`);
};

const getMovieDetail = (id) => {
  return axios.get(`${process.env.REACT_APP_API}/movies/${id}`);
};

const getShowtime = (id) => {
  return axios.get(`${process.env.REACT_APP_API}/showtime/${id}`);
};

const createTransaction = (form) => {
  return axios.post(
    `${process.env.REACT_APP_API}/transactions`,
    form,
    headers()
  );
};

const createReview = (form) => {
  return axios.post(`${process.env.REACT_APP_API}/review`, form, headers());
};

export {
  getNowPlaying,
  getMovieDetail,
  getShowtime,
  createTransaction,
  createReview,
};
