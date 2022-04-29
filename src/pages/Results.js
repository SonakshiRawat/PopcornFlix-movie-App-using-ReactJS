import { useEffect, useState } from "react";
import axios from "../axios/axios";
import Trending from "../components/center/trending/Trending";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";

function Results() {
  const [serch, setSerch] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchSearchedMovie() {
      try {
        let r = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=17bff1dc1b955410737dc167aa10c7f3&language=en-US&query=${params.ids}&page=1&include_adult=false`
        );
        setSerch(r.data.results);
      } catch (e) {
        console.log(e);
      }
    }
    fetchSearchedMovie();
  }, [params.ids]);

  return serch.map((n) => <Trending mov={n} key={uuid()} />);
}
export default Results;
