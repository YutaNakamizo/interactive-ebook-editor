/* eslint-disable @typescript-eslint/ban-types */
import { SchemaEntry, Schema } from "./schema";
import { UUID } from "./uuid";
import * as X from "./xast";
import { generateId } from "@/utils/uuid";

export type DocBookXast = Schema<DocBookElements>;
export type EditableDocBookXast = Schema<ToEditable<DocBookElements>>;

type ToEditable<T extends SchemaEntry> = T extends {}
  ? T & { data: { id: UUID } }
  : never;

type Children = Exclude<X.Element["children"][number], X.Element>;

// 以下はDocBook要素の定義
type DocBookElements = Section | Title | Para;

interface Section extends SchemaEntry {
  name: "section";
  attributes?: {
    role?: string;
  };
  children: {
    mustElements: ["title"];
    allowedElements: "para";
    allowedType: Children;
  };
}

interface Title extends SchemaEntry {
  name: "title";
  attributes?: {
    role?: string;
  };
  children: {
    allowedElements: never;
    allowedType: Children;
  };
}

interface Para extends SchemaEntry {
  name: "para";
  attributes?: {
    role?: string;
  };
  children: {
    allowedElements: never;
    allowedType: Children;
  };
}

const root: EditableDocBookXast["Root"] = {
  type: "root",
  children: [
    {
      type: "element",
      name: "section",
      data: {
        id: generateId(),
      },
      children: [
        {
          type: "element",
          name: "title",
          data: {
            id: generateId(),
          },
          children: [
            {
              type: "text",
              value: "This is a title.",
              data: {
                id: generateId(),
              },
            },
          ],
        },
        {
          type: "element",
          name: "para",
          data: {
            id: generateId(),
          },
          children: [
            {
              type: "text",
              value: "Also, this is a text.",
              data: {
                id: generateId(),
              },
            },
          ],
        },
      ],
    },
  ],
};
