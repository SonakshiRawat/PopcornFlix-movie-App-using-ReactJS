import "./Poster.css";
import axios from "../../../axios/axios";
import requests from "../../../axios/Request";
import Video from "./Video";
import React, { useState, useEffect } from "react";
import Genres from "../Genres";
import { useParams } from "react-router-dom";

function Poster(props) {
  const [poster, setPoster] = useState([]);
  const [genresName, setGenresName] = useState([]);

  const params = useParams();

  const [favy, setFavy] = useState([]);
  const [col, setCol] = useState(false);
  const [idd, setIdd] = useState(0);
  let arr2 = [];

  useEffect(() => {
    async function allInOne() {
      async function fetchPoster() {
        try {
          const response = await axios.get(requests.fetchTrendingMovie);
          return response.data.results;
        } catch (error) {
          console.log("error", error);
        }
      }

      const rand = await fetchPoster();
      let rand_id;
      rand_id = Math.trunc(Math.random() * rand.length - 1);
      if (!params.idss) {
        setPoster(rand[rand_id]);
      }
      setIdd(rand[rand_id].id);

      let g = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=17bff1dc1b955410737dc167aa10c7f3&language=en-US`
      );
      let arr = [];

      async function fetchGenre() {
        g.data.genres.map(async (n) => {
          if (rand[rand_id].genre_ids.includes(n.id)) {
            arr.push(n.name);
          }
        });

        setGenresName(arr);
      }

      fetchGenre();
    }
    allInOne();
  }, []);

  const favorites = (e) => {
    const items = JSON.parse(localStorage.getItem("favy")) || [];

    if (items.indexOf(idd) === -1) {
      arr2 = [...items, idd];

      setFavy(arr2);
      setCol(true);

      localStorage.setItem("favy", JSON.stringify(arr2));
    } else {
      items.splice(items.indexOf(idd), 1);
      favy.splice(favy.indexOf(idd), 1);
      setFavy(favy);
      setCol(false);
      localStorage.setItem("favy", JSON.stringify(items));
    }
  };
  useEffect(() => {
    const t = JSON.parse(localStorage.getItem("favy")) || [];

    if (t.includes(idd)) {
      setCol(true);
    }
  }, [favy, idd, arr2]);

  return (
    <div className="main2">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster.backdrop_path}`}
        alt="poster"
        className="poster2"
      />
      <div className="layer">
        <div className="over2">
          <div className="name">{poster.title}</div>

          <Genres gen={genresName} />

          <div className="rating">
            {(poster.vote_average / 2).toFixed(1)}
            <span className="material-icons star">star</span>
          </div>
          <div className="row">
            <Video poster={poster} />
            <div
              className={col ? "plus3 add" : "plus3 notAdd"}
              onClick={favorites}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
