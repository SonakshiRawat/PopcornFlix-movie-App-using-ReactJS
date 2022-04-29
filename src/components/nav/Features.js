import "./Features.css";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

function Feature(props) {
  return (
    <Link to={`/${props.genre.id}`} key={uuid()}>
      <option className="word" value={props.genre.g}>
        {props.genre.g}
      </option>
    </Link>
  );
}
export default Feature;
