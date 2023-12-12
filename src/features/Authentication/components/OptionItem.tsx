//For displaying the sign in options in SignInOptions page
import { Text, Image, Pressable } from "react-native";
import React from "react";
import OptionItemStyles from "../styles/OptionItemStyle";

export default function OptionItem({ index, titleText, imagepath, onSelect }) {
  return (
    <Pressable
      style={OptionItemStyles.container}
      onPress={() => onSelect(index)}
    >
      <Image source={imagepath} style={OptionItemStyles.imageStyle} />
      <Text numberOfLines={2} style={OptionItemStyles.title}>
        {`${titleText}\n`}
      </Text>
    </Pressable>
  );
}
