import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Image style={styles.coreMine} source={require(`../Imagens/logo.png`)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    coreMine: {
        height: 24,
        width: 24,
        borderRadius: 10,
        //backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
})