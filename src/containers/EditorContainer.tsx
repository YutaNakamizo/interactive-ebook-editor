import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/rootReducer";
import { currentElementSelector } from "@/features/document/selectors";

export const EditorContainer: FC<unknown> = () => {
  const element = useSelector((x: RootState) =>
    currentElementSelector(x.document)
  );

  const text = useSelector((x: RootState) =>
    currentElementSelector(x.document)
  );

  return null;
};
