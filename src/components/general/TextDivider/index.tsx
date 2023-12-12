import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export function TextDivider({ header }) {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.text}>{header}</Text>
      <View style={styles.divider} />
    </View>
  );
}
