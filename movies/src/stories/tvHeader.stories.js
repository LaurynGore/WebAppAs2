import React from "react";
import TvHeader from "../components/headerTv";
import SampleMovie from "./sampleData";

export default {
  title: "Tv Details Page/TvHeader",
  component: TvHeader,
};

export const Basic = () => <TvHeader tv={SampleMovie} />;
Basic.storyName = "Default";
