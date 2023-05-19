import React from "react";
import TvDetails from "../components/tvDetails/";
import PageTemplate from "../components/templateTvPage";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getTVShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
const TvPage = (props) => {
  const { id } = useParams();
  const { data: tv, error, isLoading, isError } = useQuery(["tv", { id: id }], getTVShow);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TvDetails tv={tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default TvPage;
