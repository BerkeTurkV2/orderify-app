import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from "./MainStyles"

import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import Card from '../../components/Card/Card';

const tables = Array.from({ length: 12 }, (_, index) => `Masa ${index + 1}`);

function Main() {
    const renderItem = ({ item }) => (
        <Card title={item} />
    );

    return (
        <View style={styles.container}>
            <HeaderLogo />
            <View style={styles.body}>
                <Text style={styles.title}>Sipariş Verebilmek İçin Masanızı Seçiniz</Text>
                <FlatList
                    data={tables}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={3}
                />
            </View>
        </View>
    );
}

export default Main;
