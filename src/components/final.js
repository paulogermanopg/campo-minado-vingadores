import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
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
    },
    button: {
        marginTop: 10,
        padding: 5,
        borderRadius: 10,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d',
    },
    bgNormal: {
        backgroundColor: '#D3D3D3',
    },
    bgHard: {
        backgroundColor: '#551A8B',
    }
})