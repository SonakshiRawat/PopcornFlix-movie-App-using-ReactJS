import "./Detail.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import uuid from "react-uuid";
import Cast from "../components/center/Cast";
import DetailPoster from "../components/center/DetailPoster";

function Detail() {
  const params = useParams();
  const [det, setDet] = useState({});
  const [cast, setCast] = useState([]);

  function previous(event) {
    let element = event.target.parentElement.parentElement.parentElement;
    let item = document.querySelectorAll(".block");
    element.prepend(item[item.length - 1]);
    console.log(item);
  }
  function next(event) {
    let element = event.target.parentElement.parentElement.parentElement;
    let item = document.querySelectorAll(".block");
    element.append(item[0]);
  }

  useEffect(() => {
    async function fetchDetailed() {
      try {
        const items = JSON.parse(localStorage.getItem("favy")) || [];
        items.forEach(async (n) => {
          let arr = [];
          const response = await axios.get(
            `/movie/${params.idss}?api_key=17bff1dc1b955410737dc167aa10c7f3&language=en-US`
          );

          const res = await axios.get(
            `/movie/${params.idss}/credits?api_key=17bff1dc1b955410737dc167aa10c7f3&language=en-US`
          );
          setDet(response.data);
          setCast(res.data.cast);
        });
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchDetailed();
  }, [params.idss]);

  return (
    <React.Fragment>
      <div className="middle">
        <DetailPoster det={det} />
        <div className="trends">
          <div className="overview2">
            <div className="head">Overview</div>
            <p>{det.overview}</p>
          </div>
          <div className="head">Cast</div>
          <div className="blocks">
            {cast.map((n) => (
              <Cast mov={n} key={uuid()} />
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
    </React.Fragment>
  );
}
export default Detail;
