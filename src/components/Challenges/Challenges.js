import React from "react";
import { gql, graphql } from "react-apollo";
import Challenge from "./Challenge";

const query = gql`
  query challengesQuery {
    nodes(filter: { type: "challenge" }) {
      results {
        entityLabel
      }
    }
  }
`;

const withQuery = graphql(query, {
  props: ({ data: { loading, nodes } }) => ({
    loading,
    challenges: nodes
  })
});

export default function Challenges({ loading, challenges }) {
  if (loading) {
    return null;
  }
  return (
    <div>
      {challenges.map(challenge => {
        return <Challenge name={challenge.entityLabel} />;
      })}
    </div>
  );
}
