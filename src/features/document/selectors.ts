import { createSelector } from "@reduxjs/toolkit";
import { DocumentState } from "./types";
import { findElement } from "@/utils/unist/findElement";

const documentSelector = (state: DocumentState) => state.document;
const elementIdSelector = (state: DocumentState) => state.currentId;

export const currentElementSelector = createSelector(
  documentSelector,
  elementIdSelector,
  (document, elementId) => {
    if (elementId === null) {
      return null;
    }

    const element = findElement(document, { data: { id: elementId } });

    if (element === undefined) {
      throw new Error("The specified does not exist.");
    }

    if (element.type !== "element") {
      throw new Error("The specified does not xast's element.");
    }

    return element;
  }
);
