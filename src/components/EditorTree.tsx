import React, { FC } from "react";
import { EditableDocBookXast } from "@/types/docbook";
import { ContentEditable } from "@/contexts/ContentEditableContext";

interface Props {
  node: EditableDocBookXast["Node"];
}

export const EditorTree: FC<Props> = ({ node }) => {
  if (node.type !== "element") {
    return null;
  }

  switch (node.name) {
    case "section": {
      return (
        <div>
          <ContentEditable id={node.data.id} />
        </div>
      );
    }

    default: {
      return null;
    }
  }
};
