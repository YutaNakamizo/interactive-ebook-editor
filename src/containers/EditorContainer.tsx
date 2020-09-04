import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/rootReducer";
import { EditorTree } from "@/components/EditorTree";
import { EditableDocBookXast } from "@/types/docbook";

type Node = EditableDocBookXast["Node"];

export const EditorContainer: FC<unknown> = () => {
  const documentState = useSelector((x: RootState) => x.document);

  return (
    <>
      {documentState.document.children.map((node, key) => (
        <EditorTree node={node as Node} key={key} />
      ))}
    </>
  );
};
