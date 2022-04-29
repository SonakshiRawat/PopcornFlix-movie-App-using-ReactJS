import "./Right.css";
import axios from "../../axios/axios";
import requests from "../../axios/Request";
import { useEffect, useState } from "react";
import React from "react";
import Popular from "./Popular";
import uuid from "react-uuid";

function Right() {
  const [topRated, setTopRated] = useState([]);
  const [favor, setFavor] = useState([]);

  function previous(event) {
    let element = event.target.parentElement.parentElement.parentElement;
    console.log(element);
    let item = document.querySelectorAll(".pop-block");
    console.log(item[item.length - 1]);
    element.prepend(item[item.length - 1]);
    console.log(item);
  }
  function next(event) {
    let element = event.target.parentElement.parentElement.parentElement;
    let item = document.querySelectorAll(".pop-block");
    element.append(item[0]);
  }
  const items = JSON.parse(localStorage.getItem("favy")) || [];

  useEffect(() => {
    async function fetchTopRated() {
      try {
        const response = await axios.get(requests.fetchTopRatedMovie);
        setTopRated(response.data.results);
        return response.data.results;
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchTopRated();

    async function fetchFavorites() {
      try {
        let arr = [];

        items.forEach(async (n) => {
          const response = await axios.get(
            `/movie/${n}?api_key=17bff1dc1b955410737dc167aa10c7f3&language=en-US`
          );

          if (arr.length > 0) {
            arr.push(response.data);
            setFavor([...arr]);
          } else {
            arr.push(response.data);
            setFavor(arr);
          }
        });
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchFavorites();
  }, []);

  return (
    <div className="right" key={uuid()}>
      <div className="popular">
        <div className="pop-head">Popular Movies</div>
        <div className="pop-list">
          {topRated.map((n) => (
            <Popular top={n} key={uuid()} />
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
          <div className="white3"></div>
          <div className="white4"></div>
        </div>
      </div>

      <div className="favorites">
        <div className="pop-head">Favorites</div>
        <div className="pop-list">
          {favor.map((n) => (
            <Popular top={n} gen={1} key={uuid()} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Right;
