import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function HomepageHero() {
  const useStyles = makeStyles(theme => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          jackExchange
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          A place to find information and ask questions. Browse our list of
          lessons and if you don't find what you're looking for, request a
          lesson.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained">View Challenges</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Browse Lessons</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default HomepageHero;
