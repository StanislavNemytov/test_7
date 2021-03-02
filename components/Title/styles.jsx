import { StyleSheet } from "react-native";
import { colors } from "../../src/style/base";

const stylesTitle = StyleSheet.create({
  title_container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title_text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default stylesTitle;
