import Feather from "react-native-vector-icons/Feather";

import React from "react";

const FeatherIcons = ({
  iconName,
  color,
  size,
  iconStyle = null,
  onPress = null,
}) => {
  return (
    <Feather
      name={iconName}
      color={color}
      size={size}
      style={[{ padding: 5 }, iconStyle]}
      onPress={onPress}
    />
  );
};

export default FeatherIcons;
