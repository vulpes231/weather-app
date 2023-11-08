import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

const Item = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="black" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "white",
  },

  temp: {
    color: "black",
    fontSize: 20,
  },
  date: {
    color: "black",
    fontSize: 15,
  },
});

export default Item;
