import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LessonsHome from "./components/Lessons/LessonsHome";
import CoursesHome from "./components/Courses/CoursesHome";
import ChallengesHome from "./components/Challenges/ChallengesHome";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import HomepageHero from "./components/Hero/HomepageHero";
import TopAppBar from "./components/AppBar/TopAppBar";

const theme = createMuiTheme({
  palette: {
    // type: 'light',
    type: "dark"
  }
});

const useStyles = makeStyles(thexme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

// TODO: Add in List of Lessons
// TODO: Add in Lesson View

// TODO: Homework: Create a List of Courses
//  Can I see a list of courses?
//  Can I see how many videos are in a course?

// TODO: Homework: Create a Course View
//  Can I view the course?

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        {/*Top Navigation*/}
        <TopAppBar />
        <main>
          {/* Hero unit */}
          <HomepageHero />

          {/* Lessons */}
          <Container className={classes.cardGrid} maxWidth="md">
            <h1>Lessons Available</h1>
            <LessonsHome />
          </Container>

          {/* Courses */}
          <Container className={classes.cardGrid} maxWidth="md">
            <h1>Courses</h1>
            <CoursesHome />
          </Container>

          {/* Challenges */}
          <Container className={classes.cardGrid} maxWidth="md">
            <h1>Challenges</h1>
            <ChallengesHome />
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    </ThemeProvider>
  );
}
