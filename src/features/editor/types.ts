import { DocBookSchema } from "@/types/docbook";

export interface EditorState {
  document: DocBookSchema["Root"];
  currentElementPath: symbol[];
}
