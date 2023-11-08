import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from "react-native";
import DisplayInfo from "../components/DIsplayInfo";

const City = () => {
  const {
    container,
    image,
    city,
    country,
    cityText,
    popText,
    popWrapper,
    riseWrapper,
    riseText,
    rowWrapper,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={image} source={require("../../assets/city.jpg")}>
        <Text style={[city, cityText]}>London</Text>
        <Text style={[country, cityText]}>UK</Text>
        <View style={[popWrapper, rowWrapper]}>
          <DisplayInfo icon={"user"} text={"8000"} bodyTextStyles={popText} />
        </View>
        <View style={[riseWrapper, rowWrapper]}>
          <DisplayInfo
            icon={"sunrise"}
            text={"10:46:58am"}
            bodyTextStyles={riseText}
          />
          <DisplayInfo
            icon={"sunset"}
            text={"17:28:15pm"}
            bodyTextStyles={riseText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: "cyan",
  },
  image: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },
  country: {
    fontSize: 20,
  },
  cityText: {
    color: "white",
    padding: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  popWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },

  riseWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseText: {
    fontSize: 20,
    color: "white",
  },
  popText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "white",
    fontWeight: "bold",
  },
  rowWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
