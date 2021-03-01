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
});

export { colors };
