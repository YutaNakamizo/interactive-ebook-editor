import { DocumentState } from "@/features/document/types";
import { useState, useEffect, useMemo } from "react";
import { createEditor, Editor } from "slate";
import { withReact, ReactEditor } from "slate-react";
import { InternalStore, ExposedStore } from "./types";
import { findElement } from "@/utils/unist/findElement";
import { SectionActions } from "./SectionActions";

type State = {
  [key in string]?: [Editor & ReactEditor, ExposedStore];
};

export const useSlatify = ({
  document,
  currentId,
  slate,
}: DocumentState): [InternalStore, ExposedStore] => {
  const [state, setState] = useState<State>({});

  const internal = useMemo(() => {
    return Object.keys(state).reduce<InternalStore>(
      (prev, key) => ({ ...prev, [key]: state[key]?.[0] }),
      {}
    );
  }, [state]);

  const exposed = useMemo(
    () => (currentId && state[currentId]?.[1]) || { parent: null },
    [state, currentId]
  );

  useEffect(() => {
    const nextState = Object.keys(slate).reduce<State>((prev, key) => {
      if (key in state) {
        return { ...prev, [key]: state[key] };
      }

      const found = findElement(document, { data: { id: key } });
      const editor = withReact(createEditor());

      switch (found?.name) {
        case "section": {
          return { ...prev, [key]: [editor, new SectionActions(editor)] };
        }
        default: {
          throw new Error(`Node "${key}" does not exist.`);
        }
      }
    }, {});

    setState(nextState);
  }, [document, slate]);

  return [internal, exposed];
};
