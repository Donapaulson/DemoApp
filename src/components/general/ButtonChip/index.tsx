import { Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import FeatherIcons from "../../Icons/FeatherIcons";
import { colors } from "../../../config/colors";

export function ButtonChip({ title, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FeatherIcons iconName="plus" color={colors.primary} size={24} />
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
}
