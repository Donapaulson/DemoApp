import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import React from "react";

const MaterialIcons = ({
  iconName,
  color,
  size,
  iconStyle = null,
  onPress = null,
}) => {
  return (
    <MaterialCommunityIcons
      name={iconName}
      color={color}
      size={size}
      style={[{ padding: 5 }, iconStyle]}
      onPress={onPress}
    />
  );
};

export default MaterialIcons;
