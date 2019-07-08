import React from "react";
import Grid from "@material-ui/core/Grid";
import Course from "./Course";

export default function CoursesHome(props) {
  let courses = [
    {
      id: "asdfads",
      name: "Course 1"
    },
    {
      id: "asdger",
      name: "Course 2"
    },
    {
      id: "olkfdgs",
      name: "Course 3"
    },
    {
      id: "dfsikgj",
      name: "Course 4"
    }
  ];

  return (
    <Grid container spacing={4}>
      {// Iterating over the lessons to output
      courses.map(course => {
        return (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Course name={course.name} />
          </Grid>
        );
      })}
    </Grid>
  );
}
