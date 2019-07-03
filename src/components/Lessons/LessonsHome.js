import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Lesson from "./Lesson";
import axios from "axios";
import striptags from "striptags";
import Lessons from "./Lessons";

export default function LessonsHome(props) {
  return (
    <>
      <h1>Lessons</h1>
      <Lessons />
    </>
  );
}
