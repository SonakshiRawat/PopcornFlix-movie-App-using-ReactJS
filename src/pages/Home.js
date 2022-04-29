import Poster from "../components/center/poster/Poster";
import uuid from "react-uuid";
import Trending from "../components/center/trending/Trending";
function Home(props) {
  function previous(event) {
    let element = event.target.parentElement.parentElement.parentElement;
    console.log(element);
    let item = document.querySelectorAll(".block");
    element.prepend(item[item.length - 1]);
    console.log(item);
  }
  function next(event) {
    let element = event.target.parentElement.parentElement.parentElement;
    let item = document.querySelectorAll(".block");
    element.append(item[0]);
  }

  return (
    <div className="middle">
      <Poster />
      <div className="trends">
        <div className="head">Trending</div>
        <div className="blocks">
          {props.tren.map((n) => (
            <Trending mov={n} key={uuid()} />
          ))}
          <div className="btn-area">
            <div className="slider-btn">
              <ion-icon
                name="chevron-back-outline"
                class="arrow-left"
                onClick={previous}
              ></ion-icon>
            </div>
            <div className="slider-btn">
              <ion-icon
                name="chevron-forward-outline"
                class="arrow-right"
                onClick={next}
              ></ion-icon>
            </div>
          </div>
          <div className="white"></div>
          <div className="white2"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
