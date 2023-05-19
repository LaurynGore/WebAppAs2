import React from "react";
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from "../components/templateTVShows";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

//import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const TVShows = (props) => {
  const { data, error, isLoading, isError } = useQuery("tv", getTVShows);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const tv = data.results;
  console.log(tv);
  // Redundant, but necessary to avoid app crashing.
  const favorites = tv.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const addToFavorites = (tvId) => true;

  return (
    <PageTemplate
      title="Discover Tv Shows"
      tv={tv}
      action={(tv) => {
        return <AddToFavoritesIcon tv={tv} />;
      }}
    />
  );
};
export default TVShows;
