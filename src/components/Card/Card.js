import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from "./CardStyles"

function Card({ title }) {
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={require("../../assets/table.jpg")} resizeMode='cover' />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default Card;
