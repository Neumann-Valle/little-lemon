import * as React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Header from "../components/Header.component";
import heroImage from "../assets/hero-image.png";

function HomeScreen({ route, navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#121212",
      gap: 15,
    }}>
      <Header />
      <View style={{ backgroundColor: 'green', width: '100%', borderRadius: 16 }}>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <View style={{ width: '55%', paddingLeft: 20 }}>
            <Text style={{ color: "white", fontFamily: 'Markazy-Text', fontSize: 40 }}>Litte Lemon</Text>
            <Text style={{ color: "white", fontFamily: 'Markazy-Text', fontSize: 30 }}>Chicago</Text>

            <Text style={{ color: "white", fontFamily: 'Karla-Regular', fontSize: 16 }}>
              We are a family owned
              Mediterranean restorant
              focused on traditional recipes
              served with a modern twist.
            </Text>
          </View>
          <View >
            <Image style={{ width: 150, height: 130, borderRadius: 16 }} source={heroImage} resizeMode="cover" />
          </View>
        </View>
        <View style={{ borderRadius: 16, alignSelf: 'center', width: '80%', margin: 10, padding: 5, backgroundColor: 'lightgrey' }}>
          <TextInput placeholderTextColor={'grey'} placeholder="Search for food" />
        </View>
      </View>
      <View style={{ width: '80%', gap: 15}}>
        <Text style={{ color: 'white', fontFamily: 'Karla-Regular', fontSize: 18 }}>Order for delivery!</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ color: 'black', backgroundColor: 'lightgrey', padding: 5, borderRadius: 5 }}>Starters</Text>
          <Text style={{ color: 'black', backgroundColor: 'lightgrey', padding: 5, borderRadius: 5 }}>Mains</Text>
          <Text style={{ color: 'black', backgroundColor: 'lightgrey', padding: 5, borderRadius: 5 }}>Desserts</Text>
          <Text style={{ color: 'black', backgroundColor: 'lightgrey', padding: 5, borderRadius: 5 }}>Drinks</Text>
        </View>
        <View style={{width:'100%',height:1, backgroundColor:'lightgrey'}}></View>
      </View>
    </View>
  );
}


export default HomeScreen;
