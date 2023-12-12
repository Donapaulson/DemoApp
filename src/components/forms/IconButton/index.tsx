import { Pressable, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

export const IconButton = () => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require("../../../assets/amazonIcon.png")}
        style={styles.image}
      />
    </Pressable>
  );
};
