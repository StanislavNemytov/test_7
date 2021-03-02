import { StyleSheet } from "react-native";
import { colors } from "../../../src/style/base";

const paddingNormal = 20;
const paddingCoupon = 13.5;

const stylesCheckoutCoupon = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: paddingNormal,
    paddingLeft: paddingNormal,
    flexDirection: "column",
  },
  coupon: {
    fontSize: 24,
    textTransform: "uppercase",
    marginBottom: paddingCoupon,
    marginTop: paddingCoupon,
    alignSelf: "center",
  },
  input: {
    fontSize: 24,
    marginBottom: paddingCoupon,
    marginTop: paddingCoupon,
    alignSelf: "center",
    // textTransform: "uppercase",
    textAlign: "center",
  },
  placeholder: {
    color: colors.placeholder,
    marginBottom: paddingNormal,
    marginTop: paddingNormal,
    alignSelf: "center",
  },
  button: {
    alignSelf: "stretch",
  },
});

export default stylesCheckoutCoupon;
