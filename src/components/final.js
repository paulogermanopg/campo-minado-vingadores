import React from 'react'
import { View, Text, StyleSheet, Modal, Image } from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}> 
                <Text style={styles.title}>We're in the End Game now</Text>
                <Image style={{width: 300, height: 300 }} source={require(`../Imagens/thanosvictory.gif`)} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
       backgroundColor: 'black',
       alignItems: 'center',
       justifyContent: 'center',
       padding: 15, 
       borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center'
    }
})