import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { colors } from "../../../config/colors";

export function TextButton({
  title,
  buttonColor = colors.white,
  textColor = colors.activeTextColor,
  style = null,
  onPress = null,
  margin = 8,
}) {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: buttonColor, marginVertical: margin },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}
