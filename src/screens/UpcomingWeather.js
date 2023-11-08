import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";

import Item from "../components/Item";
import { DATA } from "../constants";
import Empty from "../components/Empty";

const UpcomingWeather = () => {
  const { container, header, image, item_seperator } = styles;

  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require("../../assets/clouds.jpg")}
      >
        <Text style={header}>Upcoming weather</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          ItemSeparatorComponent={() => <View style={item_seperator} />}
          ListEmptyComponent={<Empty />}
        ></FlatList>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "cyan",
  },
  header: {
    color: "white",
    padding: 5,
  },

  item_seperator: {
    backgroundColor: "grey",
    height: 2,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
