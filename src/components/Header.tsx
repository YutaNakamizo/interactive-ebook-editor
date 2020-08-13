import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { HeaderMenuFile } from "./HeaderMenuFile";
import { HeaderMenuHome } from "./HeaderMenuHome";
import { HeaderMenuEdit } from "./HeaderMenuEdit";
import { HeaderMenuView } from "./HeaderMenuView";

interface Menu {
  label: string;
}

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  tab: {
    minWidth: "auto",
  },
  tabsIndicator: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const Header: FC<unknown> = () => {
  const [value, setValue] = React.useState(1);

  const menus: Menu[] = [
    { label: "File" },
    { label: "Home" },
    { label: "Edit" },
    { label: "View" },
  ];

  const handleChange = (e: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const classes = useStyle();
  return (
    <AppBar position="fixed" className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{ indicator: classes.tabsIndicator }}
      >
        {menus.map((menu: Menu) => (
          <Tab key={menu.label} label={menu.label} className={classes.tab} />
        ))}
      </Tabs>
      <HeaderMenuFile value={value} index={0} />
      <HeaderMenuHome value={value} index={1} />
      <HeaderMenuEdit value={value} index={2} />
      <HeaderMenuView value={value} index={3} />
    </AppBar>
  );
};
