import React from "react";
import RosterCard from "./RosterCard";
import { Grid } from "@material-ui/core";
import lakersRoster from "./constants";

const Content = () => {
  const getRosterCard = (rosterObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <RosterCard {...rosterObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {lakersRoster.map((rosterObj) => getRosterCard(rosterObj))}
    </Grid>
  );
};
export default Content;
