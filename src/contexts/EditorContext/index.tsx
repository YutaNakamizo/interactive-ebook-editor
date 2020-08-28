import React, {
  FC,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEditor, Node as SlateNode } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { RootState } from "@/app/rootReducer";
import { setSlateNodes } from "@/features/slate/slice";
import { CreateActions } from "./actions";
import { SlateElements } from "@/components/slate";

const Context = createContext({} as CreateActions);

export const Editor: FC<unknown> = () => {
  const { editor } = useContext(Context);
  const { slateNodes } = useSelector((state: RootState) => state.slate);
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (x: SlateNode[]) => dispatch(setSlateNodes(x)),
    []
  );

  return (
    <Slate editor={editor} value={slateNodes} onChange={handleChange}>
      <Editable renderElement={SlateElements} />
    </Slate>
  );
};

export const Provider: FC<unknown> = ({ children }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const actions = useMemo(() => new CreateActions(editor), []);

  return <Context.Provider value={actions}>{children}</Context.Provider>;
};

export const useEditorActions = (): Omit<CreateActions, "editor"> => {
  return useContext(Context);
};
