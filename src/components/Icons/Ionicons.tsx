import Ionicons from "react-native-vector-icons/Ionicons";

import React from "react";

const Ionicon = ({
  iconName,
  color,
  size,
  iconStyle = null,
  onPress = null,
}) => {
  return (
    <Ionicons
      name={iconName}
      color={color}
      size={size}
      style={[{ padding: 5 }, iconStyle]}
      onPress={onPress}
    />
  );
};

export default Ionicon;
