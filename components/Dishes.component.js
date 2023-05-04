import { View, Text, StyleSheet, Image } from "react-native";
import styles from './styles/Dishes.component.style'

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

export default Dishes;
