import { Editor, Transforms } from "slate";
import { ReactEditor } from "slate-react";

export class SectionActions {
  parent: "section";
  private editor: Editor & ReactEditor;

  constructor(editor: Editor & ReactEditor) {
    this.parent = "section";
    this.editor = editor;
  }

  private isCurrentType = (type: string) => {
    const [match] = Editor.nodes(this.editor, {
      match: (n) => n.type === type,
    });

    return !!match;
  };

  toggleTextAlign = (align: "left" | "center" | "right") => {
    const isActive = this.isCurrentType("title");

    if (isActive) {
      Transforms.setNodes(
        this.editor,
        { style: { textAlign: align } },
        { match: (node) => Editor.isBlock(this.editor, node) }
      );
    }
  };
}
