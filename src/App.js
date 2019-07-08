import React from "react";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// API fetching
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

// Routing
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

// Custom-ish components
import Home from "./pages/Home";
import ChallengesHome from "./components/Challenges/ChallengesHome";
import CoursesHome from "./components/Courses/CoursesHome";
import LessonsHome from "./components/Lessons/LessonsHome";
import Footer from "./components/Navigation/Footer";
import Playbooks from "./components/Playbooks/Playbooks";
import ResponsiveDrawer from "./components/Navigation/Drawers/ResponsiveDrawer";

// Setup caching for Apollo
const cache = new InMemoryCache();

// Setup the path for graphql
const link = new HttpLink({
  uri: "http://localhost:8000/graphql"
});

// Initialize the Apollo Constructor
const client = new ApolloClient({
  cache,
  link
});

// Create a theme for Material UI
const theme = createMuiTheme({
  palette: {
    // type: 'light',
    type: "dark"
  }
});

export default function App() {
  return (
    // Telling app we'll be using Apollo for child componenets
    <ApolloProvider client={client}>
      {/* Setup for Routing*/}
      <BrowserRouter>
        {/* Setup the theme */}
        <ThemeProvider theme={theme}>
          <React.Fragment>
            {/* "Kickstart an elegant, consistent, and simple baseline to build upon" */}
            <CssBaseline />
            {/* Responsive drawer compnenet that also contains the content for the page*/}
            <ResponsiveDrawer>
              {/* Home Route */}
              <Route path="/" exact render={() => <Home />} />
              {/* Challenges Route */}
              <Route
                path="/challenges"
                exact
                render={() => <ChallengesHome />}
              />
              {/* Lessons Route */}
              <Route path="/lessons" exact render={() => <LessonsHome />} />
              {/* Playbooks Route */}
              <Route path="/playbooks" exact render={() => <Playbooks />} />
              {/* Courses Route */}
              <Route path="/courses" exact render={() => <CoursesHome />} />
            </ResponsiveDrawer>
            {/* Footer */}
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}
