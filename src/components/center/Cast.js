import "./trending/Trending.css";

function Cast(props) {
  return (
    <div className={props.num ? "block length" : "block"} key={props.mov.id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${props.mov.profile_path}`}
        alt="movie"
        className="trending"
      />
      <div className="layer2">
        <div className="nam">
          {props.mov.original_name}
          <br />
          <div className="char">{props.mov.character}</div>
        </div>
      </div>
    </div>
  );
}

export default Cast;
