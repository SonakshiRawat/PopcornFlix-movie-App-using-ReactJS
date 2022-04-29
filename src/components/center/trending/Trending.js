import "./Trending.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

function Trending(props) {
  const [favy, setFavy] = useState([]);
  const [col, setCol] = useState(false);
  let arr = [];

  const favorites = (e) => {
    const items = JSON.parse(localStorage.getItem("favy")) || [];

    if (items.indexOf(props.mov.id) === -1) {
      arr = [...items, props.mov.id];

      setFavy(arr);
      setCol(true);

      localStorage.setItem("favy", JSON.stringify(arr));
    } else {
      items.splice(items.indexOf(props.mov.id), 1);
      favy.splice(favy.indexOf(props.mov.id), 1);
      setFavy(favy);
      setCol(false);
      localStorage.setItem("favy", JSON.stringify(items));
    }
  };

  useEffect(() => {
    const t = JSON.parse(localStorage.getItem("favy")) || [];

    if (t.includes(props.mov.id)) {
      setCol(true);
    }
  }, [favy, props.mov.id, arr]);

  return (
    <div className={props.num ? "block length" : "block"} key={props.mov.id}>
      <Link to={`/detailed/${props.mov.id}`} key={uuid()}>
        <img
          src={`https://image.tmdb.org/t/p/original/${props.mov.poster_path}`}
          alt="movie"
          className="trending"
        />
      </Link>
      <div className={col ? "plus2 add" : "plus2 notAdd"} onClick={favorites}>
        +
      </div>

      <div className="nam">{props.mov.title}</div>
      <div className="rating2">
        {(props.mov.vote_average / 2).toFixed(1)}
        <span className="material-icons star">star</span>
      </div>
    </div>
  );
}

export default Trending;
