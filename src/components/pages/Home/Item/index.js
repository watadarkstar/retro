import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const STATUS_PROTOTYPE = "Prototype it!";
const STATUS_BUILD = "Build it!";
const STATUS_RESEARCH = "Do more research!";
const matrix = [
  [
    STATUS_PROTOTYPE,
    STATUS_PROTOTYPE,
    STATUS_BUILD,
    STATUS_BUILD,
    STATUS_BUILD
  ],
  [
    STATUS_PROTOTYPE,
    STATUS_PROTOTYPE,
    STATUS_PROTOTYPE,
    STATUS_BUILD,
    STATUS_BUILD
  ],
  [
    STATUS_RESEARCH,
    STATUS_PROTOTYPE,
    STATUS_PROTOTYPE,
    STATUS_PROTOTYPE,
    STATUS_BUILD
  ],
  [
    STATUS_RESEARCH,
    STATUS_RESEARCH,
    STATUS_PROTOTYPE,
    STATUS_PROTOTYPE,
    STATUS_PROTOTYPE
  ],
  [
    STATUS_RESEARCH,
    STATUS_RESEARCH,
    STATUS_RESEARCH,
    STATUS_PROTOTYPE,
    STATUS_PROTOTYPE
  ]
];
const getStatusText = ({ value, cost }) => {
  if (value >= 5 || cost >= 5) return "";
  const status = matrix[value][cost];
  return status;
};
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  ...draggableStyle
});

function Item({ item, index, classes }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={classes.container}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <Grid container>
            <Grid item md={8}>
              {item.title}
            </Grid>
            <Grid item md={1}>
              <span className={classes.number}>{item.value}</span>
            </Grid>
            <Grid item md={1}>
              <span className={classes.number}>{item.cost}</span>
            </Grid>
            <Grid item md={2}>
              {getStatusText(item)}
            </Grid>
          </Grid>
        </Paper>
      )}
    </Draggable>
  );
}

export default withStyles(styles)(Item);
