import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import LocalLibrary from "@material-ui/icons/LocalLibrary";
import Extension from "@material-ui/icons/Extension";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Home from "@material-ui/icons/Home";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

export default function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        {/* Top navigation links */}
        <List>
          {/* Home / Logo Link */}
          <ListItem button key="home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <ListItemText primary="jackExchange" />
            </Link>
          </ListItem>
        </List>
      </div>
      <Divider />
      <List>
        {/* Lessons Link*/}
        <ListItem button key="lessons">
          <ListItemIcon>
            <LocalLibrary />
          </ListItemIcon>
          <Link
            to="/lessons"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemText primary="Lessons" />
          </Link>
        </ListItem>

        {/* Challenges Link*/}
        <ListItem button key="challenges">
          <ListItemIcon>
            <Extension />
          </ListItemIcon>
          <Link
            to="/challenges"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemText primary="Challenges" />
          </Link>
        </ListItem>

        {/* Playbooks Link*/}
        <ListItem button key="playbooks">
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <Link
            to="/playbooks"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemText primary="Playbooks" />
          </Link>
        </ListItem>

        {/* Courses Link*/}
        <ListItem button key="courses">
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <Link
            to="/courses"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemText primary="Courses" />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="ask-a-question">
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <Link to="/ask" style={{ color: "inherit", textDecoration: "none" }}>
            <ListItemText primary="Ask a question" />
          </Link>
        </ListItem>
        <ListItem button key="answer-a-question">
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <Link
            to="/playbooks"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemText primary="Help Others" />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* TODO: Insert Page title? Add Search?  */}
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* Main Content */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};
