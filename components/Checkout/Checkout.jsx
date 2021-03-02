/* eslint-disable react/prop-types */
import React from "react";
import { Animated } from "react-native";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import { colors } from "../../src/style/base";
import Company from "../Company/Company";
import Header from "../Header/Header";
import CheckoutComment from "./CheckoutComment/CheckoutComment";
import CheckoutCoupon from "./CheckoutCoupon/CheckoutCoupon";
import CheckoutList from "./CheckoutList/CheckoutList";
import CheckoutTotal from "./CheckoutTotal/CheckoutTotal";

const Checkout = ({ navigation }) => {
  const options = {
    config: {
      collapsedColor: colors.primary,
      useNativeDriver: true,
      elevation: 2,
    },
  };
  const {
    onScroll,
    containerPaddingTop,
    scrollIndicatorInsetTop,
  } = useCollapsibleHeader(options);

  const data = [
    "Header",
    "Company",
    "CheckoutList",
    "CheckoutComment",
    "CheckoutCoupon",
    "CheckoutTotal",
  ];

  const components = {
    Header,
    CheckoutComment,
    CheckoutCoupon,
    CheckoutList,
    CheckoutTotal,
    Company,
  };
  const renderData = ({ item }) => {
    const Component = components[item];
    return <Component navigation={navigation} />;
  };

  return (
    <Animated.FlatList
      onScroll={onScroll}
      // contentContainerStyle={{ paddingTop: containerPaddingTop }}
      style={{ zIndex: 10 }}
      scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
      keyExtractor={(item) => item.toString()}
      data={data}
      renderItem={renderData}
    />
    // <View style={styles.container}>
    //   <ScrollView contentContainerStyle={styles.containerScrollView}>
    //     <CheckoutList navigation={navigation} />
    //     <CheckoutComment navigation={navigation} />
    //     <CheckoutCoupon navigation={navigation} />
    //   </ScrollView>
    //   <CheckoutTotal navigation={navigation} />
    // </View>
  );
};

export default Checkout;
