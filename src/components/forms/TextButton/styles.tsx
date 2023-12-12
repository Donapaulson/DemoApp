import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../general/ScreenDimensions";
import { colors } from "../../../config/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.9,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 12,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    // paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
