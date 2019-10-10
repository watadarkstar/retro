import React from "react";
import { TextField, Paper, Grid, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

function ItemInput({ classes }) {
  return (
    <Paper className={classes.container}>
      <Grid container>
        <Grid item md={8}>
          <TextField id="standard-name" placeholder="Description" />
        </Grid>
        <Grid item md={1}>
          <TextField id="standard-name" placeholder="Cost" />
        </Grid>
        <Grid item md={1}>
          <TextField id="standard-name" placeholder="Value" />
        </Grid>
        <Grid item md={2}>
          <Button color="primary">
            <Typography>Add</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(ItemInput);
