/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { RenderElementProps, DefaultElement } from "slate-react";
import { Title } from "./Title";

export const SlateElements = (props: RenderElementProps) => {
  switch (props.element.type) {
    case "title":
      return <Title {...(props as any)} />;
    default:
      return <DefaultElement {...props} />;
  }
};
