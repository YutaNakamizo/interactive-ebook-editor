import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node as SlateNode } from "slate";
import { Root } from "@/types/xast";
import { XastState } from "./types";

const initialState: XastState = {
  xast: {
    type: "root",
    children: [],
  },
  slateNodes: [
    {
      type: "title",
      depth: 2,
      style: {
        textAlign: "center",
      },
      children: [{ text: "aaa" }],
    },
  ],
};

const slice = createSlice({
  name: "xast",
  initialState,
  reducers: {
    setXast: (state, action: PayloadAction<Root>) => {
      state.xast = action.payload;
    },
    setSlateNodes: (state, action: PayloadAction<SlateNode[]>) => {
      state.slateNodes = action.payload;
    },
  },
});

export const { setXast, setSlateNodes } = slice.actions;
export const slateReducer = slice.reducer;
