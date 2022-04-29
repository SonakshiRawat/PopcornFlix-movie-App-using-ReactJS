import { useEffect, useState } from "react";
import "./Center.css";
import axios from "../../axios/axios";
import requests from "../../axios/Request";
import Home from "../../pages/Home";
import { Routes, Route } from "react-router-dom";
import Random from "../../pages/Random";
import Results from "../../pages/Results";
import Detail from "../../pages/Detail";

function Center(props) {
  const [trendy, setTrendy] = useState([]);
  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await axios.get(requests.fetchTrendingMovie);

        setTrendy(response.data.results);
        return response.data.results;
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchTrending();
  }, []);

  return (
    <div className="cen">
      <Routes>
        <Route path="/" element={<Home tren={trendy} />}>
          Home
        </Route>
        <Route path="/:id" element={<Random />}></Route>
        <Route path="/search/:ids" element={<Results />}></Route>
        <Route path="/detailed/:idss" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default Center;
