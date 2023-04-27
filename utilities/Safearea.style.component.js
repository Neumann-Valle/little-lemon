import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
});