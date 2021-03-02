import { StyleSheet } from "react-native";
import { baseStyle, colors } from "../../src/style/base";

const stylesCompany = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    paddingLeft: 20,
    paddingRight: 20,
  },
  name: {
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
  },
  image: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  imageContainerShadow: {
    marginTop: -6,
    marginBottom: -6,
    paddingBottom: 0,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    borderRadius: 42,
    elevation: 4,
  },
  imageContainer: {
    width: 84,
    height: 84,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,

    borderRadius: 42,
    borderStyle: "solid",
    borderColor: colors.gray,
    borderWidth: 1,
  },
});

export default stylesCompany;
