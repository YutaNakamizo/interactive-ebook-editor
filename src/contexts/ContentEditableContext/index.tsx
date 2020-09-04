import React, { FC, createContext, useContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Node as SlateNode } from "slate";
import { Slate, Editable } from "slate-react";
import { RootState } from "@/app/rootReducer";
import { SlateElements } from "@/components/slate";
import { updateSlateNode } from "@/features/document/actions";
import { UUID } from "@/types/uuid";
import { ExposedStore, InternalStore } from "./types";
import { useSlatify } from "./useSlatify";

const ExposedContext = createContext<ExposedStore>({ parent: null });
const InternalContext = createContext<InternalStore>({});

export const ContentEditable: FC<{ id: UUID }> = ({ id }) => {
  const { slate } = useSelector((state: RootState) => state.document);
  const editor = useContext(InternalContext)[id];
  const dispatch = useDispatch();
  const slateNode = slate[id];
  const handleChange = useCallback(
    (node: SlateNode[]) => dispatch(updateSlateNode(id, node)),
    []
  );

  if (!slateNode) {
    throw new Error(`Slate's node "${id}" is not exist.`);
  }

  if (!editor) {
    return null;
  }

  return (
    <Slate editor={editor} value={slateNode} onChange={handleChange}>
      <Editable renderElement={SlateElements} />
    </Slate>
  );
};

export const Provider: FC<unknown> = ({ children }) => {
  const state = useSelector((state: RootState) => state.document);
  const [internal, exposed] = useSlatify(state);

  return (
    <InternalContext.Provider value={internal}>
      <ExposedContext.Provider value={exposed}>
        {children}
      </ExposedContext.Provider>
    </InternalContext.Provider>
  );
};

export const useContentEditable = (): ExposedStore => {
  return useContext(ExposedContext);
};
