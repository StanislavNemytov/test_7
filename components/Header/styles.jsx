import { StyleSheet } from "react-native";
import { baseStyle, colors } from "../../src/style/base";

const stylesHeader = StyleSheet.create({
  header: {
    ...baseStyle.container,
    backgroundColor: colors.primary,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    flex: 1,
  },
  withBack: {
    paddingRight: 42,
  },
});

export default stylesHeader;
