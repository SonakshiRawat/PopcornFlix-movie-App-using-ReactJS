import { useEffect, useState } from "react";
import axios from "../axios/axios";
import Trending from "../components/center/trending/Trending";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";

function Random() {
  const [genr, setGenr] = useState([]);
  const params = useParams();
  const k = +params.id;
  useEffect(() => {
    async function fetchGenre() {
      try {
        const resp = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=17bff1dc1b955410737dc167aa10c7f3&with_genres=${k}`
        );

        setGenr(resp.data.results);
        return resp.data.results;
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchGenre();
  }, [k]);

  return genr.map((n) => <Trending mov={n} num={3} key={uuid()} />);
}

export default Random;
