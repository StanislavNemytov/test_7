import { StyleSheet } from "react-native";
import { baseStyle, colors } from "../../../src/style/base";

const stylesUserData = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  username: {
    fontWeight: "600",
  },
  userData: {
    fontSize: 12,
  },
  userDataWrapper: { flex: 1 },
  img: { resizeMode: "contain" },
  avatar: { marginRight: 16 },
  attention: { marginLeft: 16 },
});

export default stylesUserData;
