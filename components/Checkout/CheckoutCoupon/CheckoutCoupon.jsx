import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { baseStyle } from "../../../src/style/base";
import styles from "./styles";

const CheckoutCoupon = () => {
  const [value, setValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const inputEl = useRef(null);

  const changeInputVisibility = () => {
    setInputVisible((prevState) => !prevState);
    setValue((prevValue) => prevValue.toUpperCase());
  };

  useEffect(() => {
    if (inputVisible) {
      inputEl.current.focus();
    }
  }, [inputVisible]);

  /**
   * @param {string} text
   */
  const handleChange = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      {inputVisible ? (
        <TextInput
          ref={inputEl}
          style={styles.input}
          onChangeText={handleChange}
          value={value}
          onBlur={changeInputVisibility}
        />
      ) : (
        <Text
          style={[value.length === 0 ? styles.placeholder : styles.coupon]}
          onPress={changeInputVisibility}
        >
          {value.length !== 0 ? value : "Укажите промокод"}
        </Text>
      )}

      <Pressable
        disabled={!inputVisible}
        style={baseStyle.button}
        onPress={changeInputVisibility}
      >
        <Text style={baseStyle.buttonText}>Ввести промокод</Text>
      </Pressable>
    </View>
  );
};

export default CheckoutCoupon;
