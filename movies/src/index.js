import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import TvPage from "./pages/tvDetailsPage";
import MoviesContextProvider from "./contexts/moviesContext";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import Upcomming from "./pages/upcoming";
import SiteHeader from "./components/siteHeader";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TVShows from "./pages/tvShows";
import FavoriteTvPage from "./pages/favoriteTvPage";
import TvContextProvider from "./contexts/tvContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route from="*" element={<Navigate to="/" />} />
        </Routes>
        <MoviesContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/upcomming" element={<Upcomming />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
          </Routes>
        </MoviesContextProvider>
        <TvContextProvider>
          <Routes>
            <Route path="/tv/:id" element={<TvPage />} />
            <Route path="/tv/shows" element={<TVShows />} />
            <Route path="/tv/favorites" element={<FavoriteTvPage />} />
          </Routes>
        </TvContextProvider>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
