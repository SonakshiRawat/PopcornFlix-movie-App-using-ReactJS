import "./Nav.css";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import Input from "../right/Input";
function Nav() {
  const genre = [
    { id: "", g: "Genres" },
    {
      id: 12,
      g: "Adventure",
    },
    {
      id: 10751,
      g: "Family",
    },
    {
      id: 35,
      g: "Comedy",
    },
    {
      id: 18,
      g: "Drama",
    },

    {
      id: 10752,
      g: "War",
    },
    {
      id: 28,
      g: "Action",
    },
    {
      id: 99,
      g: "Documentary",
    },
    {
      id: 80,
      g: "Crime",
    },
    {
      id: 9648,
      g: "Mystery",
    },
    {
      id: 16,
      g: "Animation",
    },
  ];
  const navigate = useNavigate();

  function navi(e) {
    console.log(e.target.value);
    navigate(`/${e.target.value}`);
  }
  function hom(e) {
    navigate(`/`);
  }
  return (
    <div className="nav">
      <div className="logo">
        <div className="side1">
          <img src="images/pop.jpg" alt="popcorn" className="pop" />
          <span className="title">POPCORNFLIX</span>
        </div>
        <div className="side">
          <div className="homy" onClick={hom}>
            Home
          </div>
          <select id="dropdown" onChange={navi}>
            {genre.map((n) => (
              <option className="word" key={uuid()} value={n.id}>
                {n.g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="btn">
        <Input />
        <span className="material-icons searchy">search</span>
      </div>
    </div>
  );
}
export default Nav;
