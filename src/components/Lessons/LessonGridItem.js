import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Lesson from "./Lesson";
import axios from "axios";
import striptags from "striptags";

export default function LessonGridItem(props) {
  const [size, setSize] = useState();

  const changeSize = size => {
    setSize(size);
    console.log("changesize");
  };

  return (
    <Grid item key={props.id} xs={12} sm={6} md={size ? 12 : 4}>
      <Lesson
        name={props.name}
        body={striptags(props.body)}
        apiLink={props.apiLink}
        sizeEvent={changeSize}
      />
    </Grid>
  );
}
