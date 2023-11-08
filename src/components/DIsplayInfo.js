import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DisplayInfo = ({ icon, text, bodyTextStyles }) => {
  const { themeText, container } = styles;
  return (
    <View style={container}>
      <Feather name={icon} size={50} color={"white"} />
      <Text style={[themeText, bodyTextStyles]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  themeText: {
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
  },
});

export default DisplayInfo;
