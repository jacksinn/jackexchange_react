import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Axios from "axios";
import SyntaxHighlighter from "react-syntax-highlighter";
import SimpleSnackbar from "../Feedback/Snackbars/SimpleSnackbar";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function Lesson(props) {
  const [lesson, setLesson] = useState();
  const [viewButton, setViewButton] = useState();

  const viewText = viewButton ? "Finished Reading" : "View";

  console.log("Lesson" + lesson);
  const extras =
    lesson === undefined ? (
      <></>
    ) : (
      <SyntaxHighlighter>{lesson.data.attributes.field_code}</SyntaxHighlighter>
    );

  useEffect(() => {}, []);

  const classes = useStyles();
  const sizeEvent = props.sizeEvent;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography>{props.body}</Typography>
        {extras}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            Axios.get(
              props.apiLink +
                "?include=field_screenshot,field_screenshot.field_media_image"
            ).then(data => {
              console.log(data.data);
              setLesson(data.data);
              setViewButton(!viewButton);
              sizeEvent(!viewButton);
            });
          }}
        >
          {viewText}
        </Button>
        <SimpleSnackbar size="small" message={<>{props.name} Added</>}>
          + Add to my lessons
        </SimpleSnackbar>
      </CardActions>
    </Card>
  );
}
