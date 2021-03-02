import { StyleSheet } from "react-native";
import { colors } from "../../src/style/base";

const stylesTitle = StyleSheet.create({
  title_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:12,
    paddingBottom:8
  },
  title_text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: 8,
  },
});

export default stylesTitle;
