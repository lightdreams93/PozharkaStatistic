import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputField = (props) => {

    return (
        props.selectedType === 'email' ?
            <TextInput style={styles.textInput}
                mode='flat'
                value={props.inputValue}
                label='Введите e-mail...'
                onChangeText={value => props.setInputValue(value)}
            />
            :
            <TextInput style={styles.textInput}
                mode='flat'
                value={props.inputValue}
                label='Введите ключевое слово...'
                onChangeText={value => props.setInputValue(value)}
            />
    )

}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 30,
        backgroundColor: 'transparent'
    }
});

export default InputField;
