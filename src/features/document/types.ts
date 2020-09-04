import { Node as SlateNode } from "slate";
import { EditableDocBookXast } from "@/types/docbook";
import { UUID } from "@/types/uuid";

export interface DocumentState {
  document: EditableDocBookXast["Root"];
  currentId: UUID | null;
  slate: {
    [key in string]?: SlateNode[];
  };
}

export type DocumentAction =
  | InitAction
  | SetCurrentAction
  | UpdateSlateNodeAction;

interface UpdateSlateNodeAction {
  type: "UPDATE_SLATE_NODE";
  payload: [UUID, SlateNode[]];
}

interface InitAction {
  type: "INIT";
}

interface SetCurrentAction {
  type: "SET_CURRENT";
  payload: UUID;
}
