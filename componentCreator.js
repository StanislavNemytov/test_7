/* eslint-disable no-undef */
var fs = require("fs");
var path = require("path");
var files = "jsx";
var names = ["COMPONENT"];

let PATHS = {
  pages: path.join(__dirname, "components/"),
};

function createFile(name, prepend = "") {
  const component = `import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles${name}";
  
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
import { baseStyle, colors } from "../../src/style/styleSheet";

const styles${name} = StyleSheet.create({
  container:{}
});

export default styles${name};
`;

  let linkToFolder = `${PATHS.pages}/${name}`;

  if (!fs.existsSync(linkToFolder)) {
    fs.mkdirSync(linkToFolder);
  }

  fs.appendFile(
    `${linkToFolder}/${prepend}${name}.${files}`,
    prepend ? style : component,
    () => {
      console.log(`File "${prepend}${name}.${files}"`);
    }
  );
}

// Create
names.forEach(async (name) => {
  await createFile(name);
  await createFile(name, "styles");
});

// Remove
// names.forEach((name) => {
//   const linkToFolder = `${PATHS.pages}/${name}`;
//   fs.unlink(`${linkToFolder}/${name}.${files}`, () => {});
// });
