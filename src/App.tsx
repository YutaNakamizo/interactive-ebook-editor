import React, { FC } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import * as colors from "@material-ui/core/colors";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.cyan[500],
    },
    error: {
      main: colors.red[500],
    },
    warning: {
      main: colors.yellow[500],
    },
    info: {
      main: colors.lightBlue[500],
    },
    success: {
      main: colors.green["A400"],
    },
  },
});

export const App: FC<unknown> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer count={"Hello World".length} message={"saving..."} />
    </ThemeProvider>
  );
};
