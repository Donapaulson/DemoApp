import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { SCREEN_WIDTH } from "../../general/ScreenDimensions";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 12,
    alignSelf: "center",
    width: SCREEN_WIDTH * 0.9,
    paddingVertical: 30,
    justifyContent: "center",
    marginVertical: 8,
  },
  input: {
    fontSize: 18,
    color: colors.black,
  },
  focusedBorder: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  label: {
    color: colors.inactiveTextColor,
    fontSize: 17,
    // backgroundColor: "yellow",
  },
  animatedStyle: {
    left: 15,
    position: "absolute",
    borderRadius: 90,
    zIndex: 10000,
  },
  animatedInputStyle: {
    left: 15,
    position: "absolute",
    borderRadius: 90,
    zIndex: 10000,
    width: SCREEN_WIDTH * 0.8,
    paddingVertical: 15,
  },
  iconStyle: {
    alignSelf: "flex-end",
    width: "10%",
    justifyContent: "center",
    position: "absolute",
    zIndex: 10001,
    alignContent: "center",
  },
});
