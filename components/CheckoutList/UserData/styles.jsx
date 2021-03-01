import { StyleSheet } from "react-native";

const stylesUserData = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    // flex: 1,
  },
  username: {
    fontWeight: "600",
  },
  userData: {
    fontSize: 12,
  },
  userDataWrapper: { flex: 1 },
  img: { resizeMode: "contain" },
  avatar: { marginRight: 16, width: 18, height: 18 },
  attention: { marginLeft: 16, width: 22, height: 24 },
});

export default stylesUserData;
