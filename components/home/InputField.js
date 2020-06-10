import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputField = (props) => {

    let inputField

    if (props.selectedType === 'email') {
        inputField = <TextInput style={styles.textInput}
            mode='flat'
            value={props.inputValue}
            label='Введите e-mail...'
            onChangeText={value => props.setInputValue(value)}
        />
    } else {
        inputField = <TextInput style={styles.textInput}
            mode='flat'
            value={props.inputValue}
            label='Введите ключевое слово...'
            onChangeText={value => props.setInputValue(value)}
        />
    }

    return inputField
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 30,
        backgroundColor: 'transparent'
    }
});

export default InputField;
