import React, { useState } from 'react';
import { StyleSheet, Picker, ToastAndroid } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import InputTextField from './InputField';

const Form = (props) => {

    const [selectedType, setSelectedType] = useState('email')
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <Text style={styles.title}>Добро пожаловать!</Text>
            <Text style={styles.subtitle}>Выберите вариант поиска и заполните поля</Text>
            <Picker
                selectedValue={selectedType}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => { setSelectedType(itemValue); setInputValue(''); }}>
                <Picker.Item label="Искать по e-mail" value="email" />
                <Picker.Item label="Искать по ключевому слову" value="key" />
            </Picker>
            <Divider style={styles.divider} />
            <InputTextField selectedType={selectedType} setInputValue={setInputValue} inputValue={inputValue} />
            <Button mode='contained' onPress={() => {
                (inputValue.length === 0 || !inputValue.trim()) ?
                    ToastAndroid.show('Заполните текстовое поле!', ToastAndroid.SHORT)
                    : props.navigation.navigate('InfoScreen', { value: inputValue })
            }}>Далее</Button>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'crimson',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase'
    },
    subtitle: {
        textTransform: 'lowercase',
        textAlign: 'center'
    },
    divider: {
        marginBottom: 30
    },
    picker: {
        height: 50,
        width: '100%',
        marginTop: 30
    }
});

export default Form;