import { StyleSheet } from "react-native";
import { colors } from "../../../src/style/base";

const stylesPayment = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  cardDataWrapper: { flex: 1 },
  img: { resizeMode: "contain", width: 41, height: 27 },
  cardTitle: { fontWeight: "700" },
  cardNumber: { color: colors.primary },
});

export default stylesPayment;
