import React, { FC } from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import {
  ToggleButtonGroup,
  ToggleButton,
  Autocomplete,
} from "@material-ui/lab";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import { HeaderMenu, HeaderMenuProps } from "@/components/HeaderMenu";
import { HeaderMenuGroup } from "@/components/HeaderMenuGroup";
import { useEditorActions } from "@/contexts/ContentEditableContext";

interface Font {
  name: string;
  label: string;
  variant?: string[];
}

const fonts = [{ name: "dummy-font", label: "Dummy Font" }];

const font_sizes = [8, 10, 12, 14, 18, 24, 28, 32, 48, 64, 128];

export const HeaderMenuHome: FC<HeaderMenuProps> = (props) => {
  const { ...others } = props;
  const { toggleTextAlign } = useEditorActions();

  return (
    <HeaderMenu {...others}>
      <HeaderMenuGroup>
        <Autocomplete
          options={fonts}
          getOptionLabel={(font: Font) => font.label}
          style={{ width: "180px" }}
          value={{ name: "dummy-font", label: "Dummy Font" }} // TODO: Replace this dummy default value
          renderInput={(params: TextFieldProps) => (
            <TextField {...params} variant="outlined" size="small" />
          )}
        />
      </HeaderMenuGroup>
      <HeaderMenuGroup>
        <Autocomplete
          options={font_sizes}
          getOptionLabel={(size: number) => `${size} pt`}
          style={{ width: "120px" }}
          value={12} // TODO: Replace this dummy default value
          renderInput={(params: unknown) => (
            <TextField {...params} variant="outlined" size="small" />
          )}
        />
      </HeaderMenuGroup>
      <HeaderMenuGroup>
        <ToggleButtonGroup
          size="small"
          exclusive
          onChange={() => toggleTextAlign("center")}
        >
          <ToggleButton value="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </HeaderMenuGroup>
    </HeaderMenu>
  );
};
