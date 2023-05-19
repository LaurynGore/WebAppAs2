import React from "react";
import Tv from "../tvCard";
import Grid from "@mui/material/Grid";

const tvList = ({ tv, action }) => {
  let tvCards = tv.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Tv key={m.id} tv={m} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default tvList;
