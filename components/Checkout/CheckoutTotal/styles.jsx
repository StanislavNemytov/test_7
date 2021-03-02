import { StyleSheet } from "react-native";
import { colors } from "../../../src/style/base";

const stylesCheckoutTotal = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 20,
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  totalContainer: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    fontSize: 18,
    fontWeight: "700",
  },
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

export default stylesCheckoutTotal;
