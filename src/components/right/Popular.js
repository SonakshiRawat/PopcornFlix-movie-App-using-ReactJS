import React from "react";
import axios from "../../axios/axios";
import { useState, useEffect } from "react";
import Genres from "../center/Genres";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

function Popular(props) {
  const [genreName, setGenreName] = useState([]);

  useEffect(() => {
    async function allInOne() {
      let g = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=17bff1dc1b955410737dc167aa10c7f3&language=en-US`
      );
      let arr = [];

      async function fetchGenre() {
        if (!props.gen) {
          g.data.genres.map(async (n) => {
            if (props.top.genre_ids && props.top.genre_ids.includes(n.id)) {
              arr.push(n.name);
            }
          });
        } else {
          props.top.genres.map(async (n) => {
            arr.push(n.name);
          });
        }
        setGenreName(arr);
      }

      fetchGenre();
    }
    allInOne();
  }, []);
  return (
    <Link to={`/detailed/${props.top.id}`} key={uuid()}>
      <div className="pop-block">
        <img
          src={`https://image.tmdb.org/t/p/original/${props.top.poster_path}`}
          alt="popular"
          className="pop-img"
        />
        <div className="cols">
          <div className="define">
            <div className="pop-name">{props.top.title}</div>
            <div className="pop-genre">
              <Genres gen={genreName} />
            </div>
          </div>
          <div className="pop-rate">
            <div className="imdb">IMDb</div>
            <div className="dec">{(props.top.vote_average / 2).toFixed(1)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Popular;
