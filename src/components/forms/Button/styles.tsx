import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { SCREEN_WIDTH } from "../../general/ScreenDimensions";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gray,
    paddingVertical: 24,
    // width: "100%",
    width: SCREEN_WIDTH * 0.9,
    borderRadius: 12,
    marginVertical: 16,
  },
  buttonText: {
    color: colors.inactiveTextColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
