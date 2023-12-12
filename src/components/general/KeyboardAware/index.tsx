import React, { useState, useEffect } from "react";
import { Keyboard, StyleProp, View, ViewStyle } from "react-native";

interface keyboardProps {
    children:any,
    style:StyleProp<ViewStyle>,
    styleDuringKeyboardShown:StyleProp<ViewStyle>
}

export const KeyboardAware:React.FC<keyboardProps> = ({
  children,
  style,
  styleDuringKeyboardShown,
}) => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    const keyboardShows = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardShown(true);
    });

    const keyboardHide = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardShown(false);
    });

    return () => {
      keyboardShows.remove();
      keyboardHide.remove();
    };
  }, []);

  return (
    <View style={[style, keyboardShown && styleDuringKeyboardShown]}>
      {children}
    </View>
  );
};
