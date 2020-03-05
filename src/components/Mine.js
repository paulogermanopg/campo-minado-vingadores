import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Image style={styles.coreMine} source={require('../Imagens/snap.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coreMine: {
        height: 34,
        width: 34,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black',
    }
})