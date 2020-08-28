import React, { FC, useMemo, useState } from "react";
import { createEditor, Node as SlateNode } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Toolbar, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setSlateNodes } from "@/features/slate/slice";
import { RootState } from "@/app/rootReducer";
import { Editor } from "@/contexts/EditorContext";

class PaperPreset {
  public width: number;
  public height: number;
  public ratio: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.ratio = height / width;
  }
}

const papers = {
  A4: new PaperPreset(210, 297),
  B5: new PaperPreset(176, 250),
};

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
  const { slateNodes } = useSelector((state: RootState) => state.slate);
  const dispatch = useDispatch();
  const editor = useMemo(() => withReact(createEditor()), []);
  const classes = useStyle();

  return (
    <main className={classes.root}>
      <Tabs />
      <Toolbar />
      <Paper square className={classes.paper}>
        <Editor />
      </Paper>
    </main>
  );
};
