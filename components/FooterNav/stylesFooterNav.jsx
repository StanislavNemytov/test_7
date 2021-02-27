import { StyleSheet } from "react-native";
import { colors } from "../../src/style/styleSheet";

const stylesFooterNav = StyleSheet.create({
  footerNav: {
    width: "100%",
    backgroundColor: colors.white,
    padding: 24,
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default stylesFooterNav;
