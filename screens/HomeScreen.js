import { useEffect, useState } from "react";
import { View, Text, Image, TextInput, FlatList } from "react-native";
import Header from "../components/Header.component";
import heroImage from "../assets/hero-image.png";
import styles from "../components/styles/HomeScreen.styles";
import Cpressable from "../components/CustomPressable.component";
import Dishes from "../components/Dishes.component";

function HomeScreen({ route, navigation }) {
  const [dishes, setDishes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchRemoteData();
  }, []);

  async function fetchRemoteData() {
    try {
      const URI =
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json";

      const response = await fetch(URI);
      data = await response.json();

      const dishes = data.menu.map((item) => {
        return { ...item, key: item.name };
      });

      setDishes([...dishes]);
    } catch (error) {
      console.log(error);
    }
  }

  function pullRefresh() {
    fetchRemoteData();
  }

  return (
    <View style={styles.container}>
      <Header navigator={navigation} />
      <View style={styles.heroArea}>
        <View style={styles.heroAreaInner}>
          <View style={styles.heroAreaText}>
            <Text style={styles.heroTitle}>Litte Lemon</Text>
            <Text style={styles.heroSub}>Chicago</Text>

            <Text style={styles.heroParagraph}>
              We are a family owned Mediterranean restorant focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <View>
            <Image
              style={styles.heroImage}
              source={heroImage}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="Search for food"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.pageSub}>Order for delivery!</Text>
        <View style={styles.innerButtons}>
          <Cpressable style={styles.buttons}>
            <Text>Starters</Text>
          </Cpressable>
          <Cpressable style={styles.buttons}>
            <Text>Mains</Text>
          </Cpressable>
          <Cpressable style={styles.buttons}>
            <Text>Desserts</Text>
          </Cpressable>
          <Cpressable style={styles.buttons}>
            <Text>Drinks</Text>
          </Cpressable>
        </View>
        <View style={styles.divider}></View>
        <FlatList
          onRefresh={pullRefresh}
          refreshing={refreshing}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          data={dishes}
          renderItem={({ item }) => (
            <Dishes
              title={item.name}
              description={item.description}
              price={item.price}
              photoNAME={item.image}
            />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

export default HomeScreen;
