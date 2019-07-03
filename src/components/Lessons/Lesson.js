import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Axios from "axios";
import SyntaxHighlighter from "react-syntax-highlighter";
import SimpleSnackbar from "../Feedback/Snackbars/SimpleSnackbar";
import { Link } from "react-router-dom";
import { LessonParseType } from "../../utils/LessonParse";

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
  drupalConsole: {
    backgroundColor: "deepskyblue",
    textAlign: "center"
  },
  composer: {
    backgroundColor: "lightseagreen",
    textAlign: "center"
  },
  defaultLesson: {
    backgroundColor: "purple",
    textAlign: "center"
  }
}));

export default function Lesson(props) {
  // Setting up state for the lesson and viewButton
  const [lesson, setLesson] = useState();
  const [viewButton, setViewButton] = useState();

  // If view button is true, set the text to "Finish Reading" otherwise to "View"
  const viewText = viewButton ? "Finished Reading" : "View";

  // If there isn't a lesson loaded, return empy component
  //  otherwise show the additional information
  const extras =
    lesson === undefined ? (
      <></>
    ) : (
      <SyntaxHighlighter>{lesson.data.attributes.field_code}</SyntaxHighlighter>
    );

  // useEffect(() => {}, []);

  // Get the styles with the function we created above
  const classes = useStyles();

  // Get reference from parent to the function that handles the GridItem size change
  const sizeEvent = props.sizeEvent;

  const type = LessonParseType(props.type);
  // const types = ["drupal_console_lesson_step", "drupal_lesson_step"];
  let typeText = "";

  let style = type => {
    switch (type) {
      case "drupal_console_lesson_step":
        typeText = "Drupal Console";
        return classes.drupalConsole;
      case "composer_lesson_step":
        typeText = "Composer";
        return classes.composer;
      default:
        typeText = "Lesson";
        return classes.defaultLesson;
    }
  };

  return (
    <Card className={classes.card}>
      <div
        className={style(type)}
        // image="https://source.unsplash.com/random"
        title="Image title"
      >
        <h1>{typeText}</h1>
      </div>
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
            if (!viewButton) {
              Axios.get(
                props.apiLink +
                  "?include=field_screenshot,field_screenshot.field_media_image"
              ).then(data => {
                setLesson(data.data);
              });
            } else {
              setLesson(undefined);
            }
            setViewButton(!viewButton);
            sizeEvent(!viewButton);
          }}
        >
          <Link
            to={{
              hash: "#" + props.id
            }}
          >
            {viewText}
          </Link>
        </Button>
        <SimpleSnackbar size="small" message={<>{props.name} Added</>}>
          + Add to my lessons
        </SimpleSnackbar>
      </CardActions>
    </Card>
  );
}
