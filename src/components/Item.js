import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

const Item = ({ dt_txt, min, max, condition }) => {
  const { date, temp, item } = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={50} color="black" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
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
    borderWidth: 3,
    backgroundColor: "white",
    borderColor: "cyan",
    borderRadius: 5,
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
