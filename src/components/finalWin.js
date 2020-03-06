import React from 'react'
import { View, Text, StyleSheet, Modal, Image } from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}> 
                <Text style={styles.title}>Bring me Thanos!</Text>
                <Image style={{width: 300, height: 300 }} source={require(`../Imagens/thorwin.gif`)} />
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
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})