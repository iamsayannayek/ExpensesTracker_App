import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ style, label, textInputConfig }) => {
  let inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#FFA240",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: "#000",
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
