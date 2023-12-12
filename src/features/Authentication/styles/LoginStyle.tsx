import { StatusBar, StyleSheet } from "react-native";
import { colors } from "../../../config/colors";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../components/general/ScreenDimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
  },
  logoContainer: {
    height: SCREEN_HEIGHT * 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "45%",
  },
  keyboardHideStyle: {
    marginBottom: 0,
  },
  onkeyboardStyle: {
    marginBottom: -SCREEN_HEIGHT * 0.1,
    marginTop: -SCREEN_HEIGHT * 0.1,
    transform: [{ scale: 0.5 }],
    opacity: 0.5,
  },
  inputContainer: {
    height: SCREEN_HEIGHT * 0.65,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: "center",
    elevation: 25,
    shadowRadius: 50,
    padding: "4%",
  },
  header: {
    fontSize: 34,
    color: colors.black,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: "8%",
    paddingBottom: "10%",
  },
  input: {
    marginVertical: 5,
    width: "100%",
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },
  sendText: { width: SCREEN_WIDTH * 0.85, fontSize: 14 },
  phoneTitleContainer: {
    flexDirection: "row",
    width: SCREEN_WIDTH * 0.85,
    justifyContent: "space-between",
    marginBottom: 8,
  },
  confirmDataStyle: { fontSize: 20, color: colors.activeTextColor },
  forgetPasswordContainer: {
    width: SCREEN_WIDTH * 0.92,
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  forgetPassword: {
    width: SCREEN_WIDTH * 0.92,
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    textDecorationLine: "underline",
  },
  faceIdContainer: {
    flexDirection: "row",
    width: SCREEN_WIDTH * 0.92,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  faceIDTitle: {
    fontSize: 20,
    color: colors.inactiveTextColor,
    fontWeight: "bold",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    resizeMode: "contain",
    width: SCREEN_WIDTH * 0.15,
    height: 40,
    tintColor: colors.primary,
  },
  smallText: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: "bold",
    padding: 16,
  },
});
