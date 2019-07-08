import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import striptags from "striptags";
import LessonGridItem from "./LessonGridItem";

export default function Lessons(props) {
  // Setting up lessons to use state
  const [lessons, setLessons] = useState();

  // Grabbing the JSONAPI endpionts for the lessons entity type
  // "The Effect Hook lets you perform side effects in function components"
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
        // Once we have all the rsults (via the promises)
        axios.spread((composerRes, drupalConsoleRes) => {
          // Populate the result array using the spread operator on the entity types
          const result = [
            ...composerRes.data.data,
            ...drupalConsoleRes.data.data
          ];
          // Update state to store the lessons
          setLessons(result);
        })
      );
  }, []);

  return lessons ? (
    <Grid container spacing={4}>
      {// Iterating over the lessons to output
      lessons.map(lesson => {
        return (
          <LessonGridItem
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
    // If no results yet just display loading text
    <div>Loading...</div>
  );
}
