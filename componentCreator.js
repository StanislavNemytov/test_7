/* eslint-disable no-undef */
var fs = require("fs");
var path = require("path");
var files = "jsx";
var names = ["COMPONENT"];

let PATHS = {
  pages: path.join(__dirname, "components"),
};

function createFile(name, createStyle = false) {
  const component = `import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
  
const ${name} = (props) => {
  return (
    <View style={styles.container}>
      <Text>${name}</Text>
    </View>
  );
};

export default ${name};
`;

  const style = `import { StyleSheet } from "react-native";
import { baseStyle, colors } from "../../src/style/base";

const styles = StyleSheet.create({
  container:{}
});

export default styles;
`;

  let linkToFolder = `${PATHS.pages}/${name}`;

  if (!fs.existsSync(linkToFolder)) {
    fs.mkdirSync(linkToFolder);
  }
  const fileName = createStyle ? "styles" : name;

  fs.appendFile(
    `${linkToFolder}/${fileName}.${files}`,
    createStyle ? style : component,
    () => {
      console.log(`File "${fileName}.${files}" was created in folder "${linkToFolder}"`);
    }
  );
}

// Create
names.forEach(async (name) => {
  await createFile(name);
  await createFile(name, true);
});

// Remove
// names.forEach((name) => {
//   const linkToFolder = `${PATHS.pages}/${name}`;
//   fs.unlink(`${linkToFolder}/${name}.${files}`, () => {});
// });
