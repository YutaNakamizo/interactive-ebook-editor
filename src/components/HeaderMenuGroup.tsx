import React, { FC, ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";

interface HeaderMenuGroupProps {
  children?: ReactNode;
}

const useStyle = makeStyles({
  root: {
    padding: "0 .5em",
  },
});

export const HeaderMenuGroup: FC = (props: HeaderMenuGroupProps) => {
  const { children, ...others } = props;

  const classes = useStyle();
  return <div className={classes.root}>{children}</div>;
};
