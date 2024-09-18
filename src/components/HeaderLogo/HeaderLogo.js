import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from "./HeaderLogoStyles";

function HeaderLogo() {
    return (
        <View>
            <View style={styles.container} >
                <Image style={styles.logo} source={require("../../assets/pandalogo.jpg")} resizeMode='contain' />
                <Text style={styles.title} >Panda Cafe & Bar & Restoran </Text>
            </View>
            <View style={styles.separator} />
        </View>
    )
};

export default HeaderLogo;