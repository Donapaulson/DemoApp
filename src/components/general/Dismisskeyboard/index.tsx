import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

interface keyboardDismissProps {
    children?: any
}

export const DismissKeyboard:React.FC<keyboardDismissProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
}
