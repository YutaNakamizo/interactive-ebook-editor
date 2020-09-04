import { Node as SlateNode } from "slate";
import { DocumentAction } from "./types";
import { UUID } from "@/types/uuid";

export const updateSlateNode = (
  id: UUID,
  slateNode: SlateNode[]
): DocumentAction => ({
  type: "UPDATE_SLATE_NODE",
  payload: [id, slateNode],
});

export const init = (): DocumentAction => ({
  type: "INIT",
});

export const setCurrent = (id: UUID): DocumentAction => ({
  type: "SET_CURRENT",
  payload: id,
});
