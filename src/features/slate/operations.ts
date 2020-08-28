import { Node as SlateNode } from "slate";
import { AppThunk } from "@/app/store";
import { Root } from "@/types/xast";
import * as actions from "./slice";
import { XastState } from "./types";

const initialState: XastState = {
  xast: {
    type: "root",
    children: [],
  },
  slateNodes: [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
    {
      type: "section",
      title: "aaaannnn",
      depth: 2,
      children: [{ text: "" }],
    },
  ],
};

export const translateXastToSlateNodes = (xast: Root): AppThunk => {
  return async (dispatch) => {
    dispatch(actions.setSlateNodes(initialState.slateNodes));
  };
};

export const translateSlateNodesToXast = (nodes: SlateNode[]): AppThunk => {
  return async (dispatch) => {
    dispatch(actions.setXast(initialState.xast));
  };
};
