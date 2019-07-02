import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Lesson from "./Lesson";
import axios from "axios";
import striptags from "striptags";

export default function LessonsHome(props) {
  const [lessons, setLessons] = useState();

  useEffect(() => {
    axios
      .all([
        axios.get(
          "http://localhost:8000/jsonapi/lesson_step_entity/composer_lesson_step"
        ),
        axios.get(
          "http://localhost:8000/jsonapi/lesson_step_entity/drupal_console_lesson_step"
        ),
        axios.get(
          "http://localhost:8000/jsonapi/lesson_step_entity/docker_lesson_step"
        ),
        axios.get(
          "http://localhost:8000/jsonapi/lesson_step_entity/drupal_lesson_step"
        ),
        axios.get(
          "http://localhost:8000/jsonapi/lesson_step_entity/drupal_module_step"
        )
      ])
      .then(
        axios.spread((composerRes, drupalConsoleRes) => {
          const result = {
            ...composerRes,
            ...drupalConsoleRes
          };
          setLessons(result.data);
        })
      );
  }, []);

  return lessons ? (
    <Grid container spacing={4}>
      {// Iterating over the lessons to output
      lessons.data.map(lesson => {
        return (
          <Grid item key={lesson.id} xs={12} sm={6} md={4}>
            <Lesson
              name={lesson.attributes.name}
              body={striptags(lesson.attributes.field_instructions.value)}
            />
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <div>Loading...</div>
  );
}
