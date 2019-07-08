import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Lessons from "../components/Lessons/Lessons";
import HomepageHero from "../components/Hero/HomepageHero";
import Challenges from "../components/Challenges/Challenges";
import CoursesHome from "../components/Courses/CoursesHome";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      {/* Hero unit */}
      <HomepageHero />

      {/* Lessons */}
      <Container className={classes.cardGrid} maxWidth="md">
        <h1>Lessons Available</h1>
        <Lessons />
      </Container>

      {/* Challenges */}
      <Container className={classes.cardGrid} maxWidth="md">
        <h1>Try These Challenges</h1>
        <Challenges />
      </Container>

      {/* Courses */}
      <Container className={classes.cardGrid} maxWidth="md">
        <h1>Courses</h1>
        <CoursesHome />
      </Container>
    </>
  );
}
