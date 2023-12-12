import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../config/colors";

export function Button({
  title,
  onPress,
  buttonStyle = null,
  buttonColor = colors.inactiveTextColor,
  textColor = colors.inactiveTextColor,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}
