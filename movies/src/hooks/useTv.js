import { useEffect, useState } from "react";
import { getTVShow } from "../api/tmdb-api";

const useTvShow = (id) => {
  const [TVShow, setTVShow] = useState(null);
  useEffect(() => {
    getTVShow(id).then((TVShow) => {
      setTVShow(TVShow);
    });
  }, [id]);
  return [TVShow, setTVShow];
};

export default useTvShow;