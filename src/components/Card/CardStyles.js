import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    card: {
        backgroundColor: '#e63946',
        borderRadius: 10,
        padding: 20,
        marginVertical: 12,
        marginHorizontal: 10,
        elevation: 10,
        alignItems: 'center',
    },
    img: {
        width: Dimensions.get("screen").width / 6,
        height: 40,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginTop: 10   
    }
})