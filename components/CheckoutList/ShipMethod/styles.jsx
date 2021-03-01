import { StyleSheet } from "react-native";
import { colors } from "../../../src/style/base";

const stylesShipMethod = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  img: { resizeMode: "contain" },
  text: { color: colors.primary, fontWeight: "700" },
});

export default stylesShipMethod;
