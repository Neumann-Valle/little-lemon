import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";


function CustomText(props) {

    const [fontsLoaded] = useFonts({
        "Markazy-Text": require("../assets/fonts/MarkaziText-Regular.ttf"),
        "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const Styles = props.style || styles.default;

    return <Text style={Styles}>{props.content}</Text>
}

const styles = StyleSheet.create({
    default: {
        fontFamily: 'Markazy-Text',
        color:'#fff'
    }
});

export default CustomText;