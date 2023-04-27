import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#F4CE14',
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
});