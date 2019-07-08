import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Axios from "axios";
import SyntaxHighlighter from "react-syntax-highlighter";
import SimpleSnackbar from "../Feedback/Snackbars/SimpleSnackbar";
import { LessonParseType } from "../../utils/LessonParse";
import MainCard from "../Cards/MainCard";

const useStyles = makeStyles(theme => ({
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

export default function Playbook(props) {
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
    <MainCard
      name={props.name}
      body={props.body}
      extras={extras}
      headerClass={style(type)}
      title={typeText}
    >
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
          {viewText}
        </Button>
        <SimpleSnackbar size="small" message={<>{props.name} Added</>}>
          + Add to my lessons
        </SimpleSnackbar>
      </CardActions>
    </MainCard>
  );
}
