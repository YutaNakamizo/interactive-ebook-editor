import type * as S from "slate";
import { EditableDocBookXast } from "@/types/docbook";
import { generateId } from "../uuid";

type Element = EditableDocBookXast["Element"];
type Text = EditableDocBookXast["Text"];

export const slateToDocBook = (slateNode: S.Node[]): (Element | Text)[] => {
  return slateNode.map((node) => {
    if (typeof node.text === "string") {
      return { type: "text", value: node.text };
    }

    if (typeof node.type === "string") {
      if (Array.isArray(node.children)) {
        return {
          type: "element",
          name: node.type,
          data: { id: generateId() },
          children: slateToDocBook(node.children),
        } as Element;
      }
    }

    throw new Error("This node is not Element or Text.");
  });
};
