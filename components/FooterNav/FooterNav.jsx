import React from "react";
import { View } from "react-native";
import ButtonFooter from "../Buttons/ButtonFooter/ButtonFooter";
import styles from "./stylesFooterNav";

const FooterNav = (props) => {
  return (
    <View style={styles.footerNav}>
      <ButtonFooter icon={"home"} />
      <ButtonFooter icon={"info"} />
      <ButtonFooter icon={"chat"} />
      <ButtonFooter icon={"cart"} />
      <ButtonFooter icon={"account"} />
    </View>
  );
};

export default FooterNav;
