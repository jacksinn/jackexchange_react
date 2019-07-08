import React from "react";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundColor: "purple"
  },
  cardContent: {
    flexGrow: 1
  },
  headerText: {
    fontSize: "2.2em"
  }
}));

export default function MainCard(props) {
  // Get the styles with the function we created above
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={props.headerClass}>
        <h1 className={classes.headerText}>{props.title}</h1>
      </div>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography>{props.body}</Typography>
        {props.extras}
      </CardContent>
      {props.children}
    </Card>
  );
}
