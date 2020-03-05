import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback, Image } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
    const { mined, opened, nearMines, exploded, flagged, joia } = props

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (exploded) styleField.push(styles.exploded)
    if (flagged) styleField.push(styles.flagged)
    if (!opened && !exploded) styleField.push(styles.regular)
    const styleJoia = [styles.coreMine]
    if (joia) styleJoia.push(styles.joia)


    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines == 1 ? 
                    <Image style={styleJoia} source={require(`../Imagens/azul.png`)} /> : false}
                {!mined && opened && nearMines == 2 ? 
                    <Image style={styleJoia} source={require(`../Imagens/verde.png`)} /> : false}
                {!mined && opened && nearMines == 3 ? 
                    <Image style={styleJoia} source={require(`../Imagens/amarela.png`)} /> : false}
                {!mined && opened && nearMines == 4 ? 
                    <Image style={styleJoia} source={require(`../Imagens/laranja.png`)} /> : false}
                {!mined && opened && nearMines == 5 ? 
                    <Image style={styleJoia} source={require(`../Imagens/vermelho.png`)} /> : false}
                {!mined && opened && nearMines >= 6 ? 
                    <Image style={styleJoia} source={require(`../Imagens/roxa.png`)} /> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    coreMine: {
        height: 34,
        width: 34,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exploded: {
        backgroundColor: 'black',
        borderColor: 'black',
    },
    joia: {
        height: 24,
        width: 24,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
})