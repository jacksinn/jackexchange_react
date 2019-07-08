import React from "react";
import Grid from "@material-ui/core/Grid";
// import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import striptags from "striptags";
import Challenge from "./Challenge";

// Setup the GraphQL query
const GET_CHALLENGES = gql`
  query challengesQuery {
    nodes(filter: { type: "challenge" }) {
      results {
        entityLabel
        nid
        ... on NodeChallenge {
          body {
            value
          }
        }
      }
    }
  }
`;

export default function Challenges() {
  // In the return we wrap the output in a Query component and pass the GraphQL query
  //  If it's loading, we note that, if there are errors, same, and once we have data
  //  then we pass along the data to the challenge component
  // TODO: Setup the Grid component like the Lessons Grid component
  return (
    <Query query={GET_CHALLENGES}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <Grid container spacing={4}>
            {// Iterating over the lessons to output
            data.nodes.results.map(challenge => {
              return (
                <Grid item key={challenge.nid} xs={12} sm={6} md={4}>
                  <Challenge
                    name={challenge.entityLabel}
                    body={striptags(challenge.body.value)}
                  />
                </Grid>
              );
            })}
          </Grid>
        );
      }}
    </Query>
  );
}
