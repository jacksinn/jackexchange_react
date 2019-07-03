import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import ResponsiveDrawer from "./components/Navigation/Drawers/ResponsiveDrawer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import ChallengesHome from "./components/Challenges/ChallengesHome";
import CoursesHome from "./components/Courses/CoursesHome";
import LessonsHome from "./components/Lessons/LessonsHome";
import Lessons from "./components/Lessons/Lessons";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:8000/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <ResponsiveDrawer>
            <BrowserRouter>
              <Route path="/" exact render={() => <Home />} />
              <Route
                path="/challenges"
                exact
                render={() => <ChallengesHome />}
              />
              <Route path="/lessons" exact render={() => <LessonsHome />} />
              <Route path="/courses" exact render={() => <CoursesHome />} />
            </BrowserRouter>
          </ResponsiveDrawer>
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
    </ApolloProvider>
  );
}
