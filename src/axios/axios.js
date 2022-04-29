import axios from "axios";

const prefix = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default prefix;
