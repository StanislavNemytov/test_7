import { StyleSheet } from "react-native";
import colors from "./colors";

export const baseStyle = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  scroll: {
    flex: 1,
  },
  checkoutLayout: { zIndex: 0, paddingTop: 74, position: "relative" },
  button: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontWeight: "500",
    textAlign: "center",
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 14,
  },
});

export { colors };
