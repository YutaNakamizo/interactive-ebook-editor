import React, { FC, createElement } from "react";
import { RenderElementProps } from "slate-react";
import { makeStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";

type Props = RenderElementProps & {
  element: {
    depth: 1 | 2 | 3 | 4 | 5 | 6;
    style: {
      textAlign?: "left" | "center" | "right";
    };
  };
};

export const Title: FC<Props> = ({ element, attributes, children }) => {
  const { depth, style } = element;

  return (
    <div>{createElement(`h${depth}`, { ...attributes, style }, children)}</div>
  );
};
