import React from "react";
import TVDetails from "../components/movieDetails";
import SampleMovie from "./sampleData";

export default {
  title: "Tv Details Page/TVDetails",
  component: TVDetails,
};

export const Basic = () => <TVDetails tv={SampleMovie} />;
Basic.storyName = "Default";
