import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../../components/general/ScreenDimensions";
import { colors } from "../../../config/colors";

const OptionItemStyles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    width: SCREEN_WIDTH * 0.45,
  },
  imageStyle: {
    width: 50,
    height: 50,
    tintColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    flex: 0.5,
    color: colors.white,
  },
});

export default OptionItemStyles;
