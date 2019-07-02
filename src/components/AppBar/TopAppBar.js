import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function TopAppBar() {
  const useStyles = makeStyles(theme => ({
    appbar: {
      backgroundColor: theme.palette.background.default
    },
    icon: {
      marginRight: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appbar}>
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          jackExchange
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;
