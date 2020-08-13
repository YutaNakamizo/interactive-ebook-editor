import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";

interface FooterProps {
  count: number;
  message?: string;
}

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    top: "auto",
    bottom: 0,
  },
  toolbar: {
    minHeight: theme.spacing(4),
    fontSize: ".9rem",
  },
}));

export const Footer: FC<FooterProps> = (props) => {
  const { count, message } = props;

  const classes = useStyle();
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>{count} letter(s)</div>
        <div style={{ flexGrow: 1 }}></div>
        <div>{message}</div>
      </Toolbar>
    </AppBar>
  );
};
