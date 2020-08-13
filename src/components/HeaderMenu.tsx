import React, { FC, ReactNode } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

export interface HeaderMenuProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
  const { children, index, value, ...others } = props;

  const classes = useStyle();
  return (
    <div className={classes.root} hidden={value !== index}>
      <Toolbar disableGutters={true}>{children}</Toolbar>
    </div>
  );
};
