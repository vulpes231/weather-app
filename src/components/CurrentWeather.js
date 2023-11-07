import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Feather name="sun" size={100} color="black" />
          <Text>Hello World</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
});

export default CurrentWeather;
