import { StyleSheet } from "react-native";
import { colors } from "../../../src/style/base";

const stylesPayment = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  cardDataWrapper: { flex: 1 },
  img: { marginRight: 16, resizeMode: "contain", width: 41, height: 27 },
  cardTitle: { fontWeight: "500" },
  cardNumber: { color: colors.primary, fontSize: 12, fontWeight: "500" },
});

export default stylesPayment;
