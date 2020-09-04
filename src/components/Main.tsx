import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Toolbar, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "1em 0",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    boxSizing: "border-box",
    margin: "1em auto",
    width: "40%",
    padding: "20px",
  },
}));

export const Main: FC<unknown> = () => {
  const classes = useStyle();

  return (
    <main className={classes.root}>
      <Tabs />
      <Toolbar />
      <Paper square className={classes.paper}></Paper>
    </main>
  );
};
