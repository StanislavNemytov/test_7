import { StyleSheet } from "react-native";
import { baseStyle, colors } from "../../src/style/base";

const stylesHeader = StyleSheet.create({
  header: {
    ...baseStyle.container,
    backgroundColor: colors.header,
    paddingTop: 36,
    paddingBottom: 12,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default stylesHeader;
