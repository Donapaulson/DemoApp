import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../ScreenDimensions";
import { colors } from "../../../config/colors";

export const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.4,
    borderRadius: SCREEN_WIDTH * 0.15,
    backgroundColor: colors.primaryLight,
    paddingVertical: 4,
    paddingHorizontal: 4,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 8,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.primary,
    paddingHorizontal: 4,
  },
});
