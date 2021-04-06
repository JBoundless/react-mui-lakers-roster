import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Los Angeles Lakers 2020-21 Roster
        </Typography>
        <SportsBasketballIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
