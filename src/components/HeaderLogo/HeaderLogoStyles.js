import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: "center",
    },
    logo: {
        width: 60,
        height: 60,
    },
    title: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "black",   
    },
    separator: {
        height: 2,
        backgroundColor: "black",
        marginHorizontal: 20
    }
})