import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current weather</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <View style={highLowWrapper}>
          <Text style={highLow}>High: 8 </Text>
          <Text style={highLow}>Low: 6 </Text>
        </View>
      </View>
      <View style={bodyWrapper}>
        <Text style={description}>It's sunny</Text>
        <Text style={message}>It's perfect t-shirt day!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "cyan",
    marginTop: StatusBar.currentHeight || 0,
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 20,
  },
});

export default CurrentWeather;
