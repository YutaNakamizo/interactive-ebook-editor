import { UUID } from "@/types/uuid";
import { findElement } from "@/utils/unist/findElement";
import { EditableDocBookXast } from "@/types/docbook";
import { useMemo } from "react";

type Element = EditableDocBookXast["Element"];
type Root = EditableDocBookXast["Root"];

export const useElement = (elementId: UUID, document: Root): Element | null => {
  return useMemo(
    () => findElement(document, { data: { id: elementId } }) || null,
    [elementId, document]
  );
};
