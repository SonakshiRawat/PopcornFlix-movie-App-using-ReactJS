import "./poster/Poster.css";
import React, { useState, useEffect } from "react";
import Video from "./poster/Video";
import Genres from "./Genres";
function DetailPoster(props) {
  // console.log(props.det);
  const [genresName, setGenresName] = useState([]);
  const [favy, setFavy] = useState([]);
  const [col, setCol] = useState(false);
  const [idd, setIdd] = useState(0);
  let arr2 = [];

  useEffect(() => {
    async function allInOne() {
      let arr = [];

      async function fetchGenre() {
        if (!props.det.genres) return;
        props.det.genres.map(async (n) => {
          arr.push(n.name);
        });

        setGenresName(arr);
      }

      fetchGenre();
      setIdd(props.det.id);
    }
    allInOne();
  }, [props.det]);

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
    <div className="main">
      <img
        src={`https://image.tmdb.org/t/p/original/${props.det.backdrop_path}`}
        alt="poster"
        className="poster"
      />
      <div className="layer">
        <div className="over">
          <div className="name">{props.det.title}</div>

          <Genres gen={genresName} />

          <div className="overview">
            {props.det.overview && props.det.overview.length > 400
              ? props.det.overview.substring(0, 400) + "..."
              : props.det.overview}
          </div>
          <div className="row">
            <Video poster={props.det} />
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
export default DetailPoster;
