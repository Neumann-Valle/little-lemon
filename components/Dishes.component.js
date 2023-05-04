import { View, Text, StyleSheet, Image } from "react-native";

function Dishes(props) {
  const URI = `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${props.photoNAME.trim()}?raw=true`;

  return (
    <View style={styles.container}>
      <View style={styles.innerTextContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>${props.price}</Text>
      </View>
      <Image source={{ uri: URI }} resizeMode="cover" style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "lightgrey",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  innerTextContainer: {
    width: "60%",
  },
  title: {
    fontFamily: "Markazy-Text",
    fontSize: 25,
  },
  description: {
    fontFamily: "Karla-Regular",
  },
  price: {
    fontFamily: "Markazy-Text",
    fontSize: 25,
  },
  image: {
    // padding: 2,
    backgroundColor: "black",
    height: 100,
    width: 100,
  },
});

export default Dishes;
