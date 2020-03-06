import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    <Image style={styles.coreMine} source={require(`../Imagens/logo.png`)} />
                </TouchableOpacity>
            <Text style={styles.flagsLeft}>{`Snaps!\n`}{props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>END GAME</Text>
            </TouchableOpacity>
            <Text style={styles.pg}>{``}PG®</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
        textAlign: 'center'
    },
    pg: {
        fontSize: 10,
        fontWeight: 'bold',
        paddingTop: 0,
        marginLeft: 0,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 10,
    },
    coreMine: {
        height: 74,
        width: 74,
        borderRadius: 10,
        //backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        fontSize: 20,
        color: "#DDD",
        fontWeight: 'bold',
    }
})