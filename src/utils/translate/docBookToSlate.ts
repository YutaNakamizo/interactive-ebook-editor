import { EditableDocBookXast } from "@/types/docbook";
import { Node as SlateNode } from "slate";

type Element = EditableDocBookXast["Element"];
type Node = EditableDocBookXast["Node"];

export const docBookToSlate = (element: Element) => {
  return $docBookToSlate(element.children);
};

const $docBookToSlate = (elements: Node[]): SlateNode[] => {
  const node: SlateNode[] = [];

  for (const element of elements) {
    switch (element.type) {
      case "element": {
        node.push({
          type: element.name,
          children: $docBookToSlate(element.children),
        });
        break;
      }
      case "text": {
        node.push({ text: element.value });
        break;
      }
    }
  }

  return node;
};
