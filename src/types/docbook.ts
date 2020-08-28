import { SchemaEntry, Schema } from "./schema";
import * as X from "./xast";

export type DocBookSchema = Schema<Section | Title | Para>;

type Text = X.Text & {
  data?: {
    key: symbol;
  };
};

type Children =
  | Exclude<X.Element["children"][number], X.Element | X.Text>
  | Text;

interface Section extends SchemaEntry {
  name: "section";
  attributes?: {
    role?: string;
  };
  data?: {
    key: symbol;
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
  data?: {
    key: symbol;
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
  data?: {
    key: symbol;
  };
  children: {
    allowedElements: never;
    allowedType: Children;
  };
}

const root: DocBookSchema["Root"] = {
  type: "root",
  children: [
    {
      type: "element",
      name: "section",
      children: [
        {
          type: "element",
          name: "title",
          children: [
            {
              type: "text",
              value: "This is a title.",
            },
          ],
        },
        {
          type: "element",
          name: "para",
          children: [
            {
              type: "text",
              value: "Also, this is a text.",
            },
          ],
        },
      ],
    },
  ],
};
