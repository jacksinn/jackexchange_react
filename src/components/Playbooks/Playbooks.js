import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import striptags from "striptags";
import PlaybookGridItem from "./PlaybookGridItem";

export default function Playbooks(props) {
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
          const result = [
            ...composerRes.data.data,
            ...drupalConsoleRes.data.data
          ];
          setLessons(result);
        })
      );
  }, []);

  return lessons ? (
    <Grid container spacing={4}>
      {// Iterating over the lessons to output
      lessons.map(lesson => {
        return (
          <PlaybookGridItem
            id={lesson.id}
            key={lesson.id}
            name={lesson.attributes.name}
            body={striptags(lesson.attributes.field_instructions.value)}
            apiLink={lesson.links.self.href}
            type={lesson.type}
          />
        );
      })}
    </Grid>
  ) : (
    <div>Loading...</div>
  );
}
