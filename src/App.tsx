import React, { FC, Component } from "react";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import * as colors from "@material-ui/core/colors";
import { store } from "./app/store";
import { Provider as EditorProvider } from "@/contexts/EditorContext";
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

class ErrorBoundary extends Component {
  componentDidCatch() {
    return null;
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export const App: FC<unknown> = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <EditorProvider>
            <Header />
            <Main />
            <Footer count={"Hello World".length} message={"saving..."} />
          </EditorProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};
