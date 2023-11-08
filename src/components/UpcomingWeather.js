import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";

import Item from "./Item";
import { DATA } from "../constants";
import Empty from "./Empty";

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Upcoming weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        ItemSeparatorComponent={() => <View style={styles.item_seperator} />}
        ListEmptyComponent={<Empty />}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "cyan",
  },

  item_seperator: {
    backgroundColor: "grey",
    height: 2,
  },
});

export default UpcomingWeather;
