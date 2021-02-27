import { StyleSheet } from "react-native";
import { colors } from "../../src/style/styleSheet";

const stylesTitle = StyleSheet.create({
  title_container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title_text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default stylesTitle;
