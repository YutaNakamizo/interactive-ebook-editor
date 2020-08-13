import React, { FC } from "react";
import { HeaderMenu, HeaderMenuProps } from "@/components/HeaderMenu";

export const HeaderMenuEdit: FC<HeaderMenuProps> = (props) => {
  const { ...others } = props;

  return <HeaderMenu {...others}>Hedaer Menu Edit</HeaderMenu>;
};
