import { StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import { SCREEN_HEIGHT } from "../../../components/general/ScreenDimensions";

const SignInstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    padding: "5%",
  },
  logoContainer: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
  },
  optionViewContainer: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "center",
  },
  optionContainer: {
    flex: 0.45,
    height: SCREEN_HEIGHT * 0.2,
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "justify",
  },
  smallTextContainer: {
    justifyContent: "center",
    padding: "2%",
  },
  smallText: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: "bold",
  },
});

export default SignInstyles;
