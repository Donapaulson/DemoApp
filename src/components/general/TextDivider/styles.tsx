import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../ScreenDimensions";
import { colors } from "../../../config/colors";

export const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.9,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 0,
    justifyContent: "center",
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.black,
    flex: 1,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    paddingHorizontal: 8,
    fontSize: 10,
  },
});
