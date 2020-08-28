import { Root } from "@/types/xast";
import { Node as SlateNode } from "slate";

export interface XastState {
  xast: Root;
  slateNodes: SlateNode[];
}
