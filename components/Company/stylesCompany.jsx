import { StyleSheet } from "react-native";
import { baseStyle, colors } from "../../src/style/styleSheet";

const stylesCompany = StyleSheet.create({
  container: {
    ...baseStyle.container,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    position: "absolute",
    top: 0,
    left: 0,
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
    paddingBottom: 2,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 10,
      height: 4,
    },
    shadowOpacity: 0.75,
    borderRadius: 41,
    elevation: 5,
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
