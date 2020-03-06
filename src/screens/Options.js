import React from 'react'
import { View, Text, StyleSheet, Modal, Image, ScrollView } from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}> 
                <ScrollView>
                    <Text style={styles.title}>Como o jogo funciona</Text>
                    <Image style={{width: 300, height: 900 }} source={require(`../Imagens/options.png`)} />
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
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