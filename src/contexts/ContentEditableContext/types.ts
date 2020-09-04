import { SectionActions } from "./SectionActions";
import { Editor } from "slate";
import { ReactEditor } from "slate-react";

export type ExposedStore = { parent: null } | SectionActions;

export type InternalStore = {
  [T in string]?: Editor & ReactEditor;
};
