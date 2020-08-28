import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node as SlateNode } from "slate";
import { DocBookSchema } from "@/types/docbook";
import { EditorState } from "./types";

const initialState: EditorState = {
  document: {
    type: "root",
    children: [
      {
        type: "element",
        name: "para",
        data: {
          key: Symbol(),
        },
        children: [
          {
            type: "text",
            value: "",
            data: {
              key: Symbol(),
            },
          },
        ],
      },
    ],
  },
  currentElementPath: [],
};

const slice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setXast: (state, action: PayloadAction<DocBookSchema["Root"]>) => {
      state.document = action.payload;
    },
  },
});

export const { setXast } = slice.actions;
export const slateReducer = slice.reducer;
