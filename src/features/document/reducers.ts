/* eslint-disable @typescript-eslint/no-explicit-any */
import { slateToDocBook } from "@/utils/translate/slateToDocBook";
import { findElement } from "@/utils/unist/findElement";
import { generateId } from "@/utils/uuid";
import { DocumentState, DocumentAction } from "./types";
import { EditableDocBookXast } from "@/types/docbook";
import deepcopy from "deepcopy";

const current = generateId();

const initialState: DocumentState = {
  currentId: current,
  document: {
    type: "root",
    children: [
      {
        type: "element",
        name: "section",
        data: { id: current },
        children: [
          {
            type: "element",
            name: "title",
            data: { id: generateId() },
            children: [
              {
                type: "text",
                value: "",
              },
            ],
          },
          {
            type: "element",
            name: "para",
            data: { id: generateId() },
            children: [{ type: "text", value: "a" }],
          },
        ],
      },
    ],
  },
  slate: {
    [current]: [
      {
        type: "para",
        children: [{ text: "a" }],
      },
    ],
  },
};

type Node = EditableDocBookXast["Node"];

export const documentReducer = (
  state = initialState,
  action: DocumentAction
): DocumentState => {
  switch (action.type) {
    case "INIT": {
      return initialState;
    }

    case "SET_CURRENT": {
      return { ...state, currentId: action.payload };
    }

    case "UPDATE_SLATE_NODE": {
      const { document, slate } = state;
      const [id, slateNode] = action.payload;
      const element = findElement(document, { data: { id } });

      if (element === undefined) {
        throw new Error("The specified does not exist.");
      }

      const nextDoc = deepcopy(document);
      const found = findElement(nextDoc, { data: { id } });

      if (found && found.type === "element") {
        found.children = slateToDocBook(slateNode) as any;
      }

      return {
        ...state,
        document: nextDoc,
        slate: {
          ...slate,
          [id]: slateNode,
        },
      };
    }

    default: {
      return initialState;
    }
  }
};
