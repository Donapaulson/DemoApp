import React, { useEffect, useState, useRef } from "react";
import { View, TextInput, Animated } from "react-native";
import FeatherIcons from "../../Icons/FeatherIcons";
import { styles } from "./styles";
import { colors } from "../../../config/colors";

export const FloatingTitleTextInput = ({
  title,
  textValue = null,
  onTextupdate = null,
  iconEnabled = false,
  style = null,
  editable = true,
  onPress = null,
  iconName = null,
  ref = null,
  setInputValue = null,
  submitOption = false,
  keyboardType = null,
}) => {
  const [value, setValue] = useState(textValue);
  const moveText = useRef(new Animated.Value(0)).current;
  const [fontSize, setFontSize] = useState(16);
  const [isFocused, setIsFocused] = useState(false);
  const animatedFontSize = useRef(new Animated.Value(fontSize)).current;

  useEffect(() => {
    if (value !== null) {
      moveTextTop();
    } else if (value === null) {
      moveTextBottom();
    }
  }, [value]);

  const onChangeText = (text: string) => {
    onTextupdate(text);
    setValue(text);
  };

  const onFocusHandler = () => {
    setIsFocused(true);
    if (value !== "" || value !== null) {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    setIsFocused(false);
    if (value === null || value === "") {
      moveTextBottom();
    }
  };

  const onSubmitHandler = () => {
    if (value && submitOption) {
      setInputValue(value);
      setValue(null);
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedFontSize, {
      toValue: 12,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedFontSize, {
      toValue: 16,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [3, -12],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  const inputYVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 12],
  });

  const animInputStyle = {
    transform: [
      {
        translateY: inputYVal,
      },
    ],
  };

  return (
    <View style={[styles.container, isFocused ? styles.focusedBorder : style]}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Animated.Text style={[styles.label, { fontSize: animatedFontSize }]}>
          {title}
        </Animated.Text>
      </Animated.View>
      <Animated.View style={[styles.animatedInputStyle, animInputStyle]}>
        <TextInput
          ref={ref}
          autoCapitalize={"none"}
          keyboardType={keyboardType ? keyboardType : "default"}
          style={styles.input}
          value={value}
          onChangeText={(text: string) => onChangeText(text)}
          editable={editable}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          blurOnSubmit
          onSubmitEditing={() => onSubmitHandler()}
        />
      </Animated.View>

      {iconEnabled && (
        <FeatherIcons
          iconName={iconName}
          size={20}
          iconStyle={styles.iconStyle}
          color={colors.inactiveTextColor}
          onPress={onPress}
        />
      )}
    </View>
  );
};
