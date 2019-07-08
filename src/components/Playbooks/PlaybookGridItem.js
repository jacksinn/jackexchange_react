import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Playbook from "./Playbook";
import striptags from "striptags";

export default function PlaybookGridItem(props) {
  const [size, setSize] = useState();

  const changeSize = size => {
    setSize(size);
    console.log("changesize");
  };

  return (
    <Grid item key={props.id} xs={12} sm={6} md={size ? 12 : 4}>
      <Playbook
        id={props.id}
        key={props.id}
        name={props.name}
        body={striptags(props.body)}
        apiLink={props.apiLink}
        sizeEvent={changeSize}
        type={props.type}
      />
    </Grid>
  );
}
