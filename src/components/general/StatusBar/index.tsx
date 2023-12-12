import { StatusBar } from "react-native";
import React from "react";
import { colors } from "../../../config/colors";

interface statusBarProps {
  backgroundColor?: any;
}

export function Statusbar({ backgroundColor }: statusBarProps) {
  return (
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor={backgroundColor ? backgroundColor : colors.white}
      translucent={true}
    />
  );
}
