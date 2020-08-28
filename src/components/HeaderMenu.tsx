import React, { FC, ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

export interface HeaderMenuProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const useStyle = makeStyles({
  root: {},
});

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
  const { children, index, value } = props;
  const classes = useStyle();

  return (
    <div className={classes.root} hidden={value !== index}>
      <Toolbar disableGutters={true}>{children}</Toolbar>
    </div>
  );
};
