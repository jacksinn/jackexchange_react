import React from "react";
import Grid from "@material-ui/core/Grid";
// import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import striptags from "striptags";
import Challenges from "./Challenges";

export default function ChallengesHome() {
  return (
    <>
      <h1>Challenges</h1>
      <Challenges />
    </>
  );
}
