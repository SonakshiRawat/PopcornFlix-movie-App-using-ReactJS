import { useEffect, useState } from "react";
import axios from "../../../axios/axios";
import "./Video.css";
function Video(props) {
  const [official, setOfficial] = useState("");
  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await axios.get(
          `/movie/${props.poster.id}/videos?api_key=17bff1dc1b955410737dc167aa10c7f3&language=en-US`
        );
        setOfficial(
          res.data.results.filter((n) => n.name === "Official Trailer")[0].key
        );
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchVideo();
  }, [props]);
  return (
    <button className="watch">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.youtube.com/watch?v=${official}`}
      >
        Watch
      </a>
    </button>
  );
}

export default Video;
