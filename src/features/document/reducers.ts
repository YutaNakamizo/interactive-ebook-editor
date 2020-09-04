import map from "unist-util-map";
import { slateToDocBook } from "@/utils/translate/slateToDocBook";
import { findElement } from "@/utils/unist/findElement";
import { generateId } from "@/utils/uuid";
import { DocumentState, DocumentAction } from "./types";

const current = generateId();

const initialState: DocumentState = {
  currentId: current,
  document: {
    type: "root",
    children: [
      {
        type: "element",
        name: "para",
        data: { id: current },
        children: [{ type: "text", value: "" }],
      },
    ],
  },
  slate: {
    [current]: [
      {
        type: "para",
        children: [{ text: "" }],
      },
    ],
  },
};

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
      const element = findElement(document, {
        data: { key: id },
      });

      if (element === undefined) {
        throw new Error("The specified does not exist.");
      }

      const nextDocument = map(document, (node) => {
        if (node.type !== "element" || node.data?.key !== id) {
          return node;
        }

        return { ...node, children: slateToDocBook(slateNode) };
      }) as DocumentState["document"];

      return {
        ...state,
        document: nextDocument,
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
