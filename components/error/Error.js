import React from 'react'
import { Text, StyleSheet } from 'react-native'
import ContainerLayout from '../layouts/ContainerLayout'
import ContentLayout from '../layouts/ContentLayout'

const Error = () => {
    return (
        <ContainerLayout>
            <ContentLayout centered>
                <Text style={styles.errorText}>Ничего не найдено!</Text>
            </ContentLayout>
        </ContainerLayout>
    )
}

const styles = StyleSheet.create({
    errorText: {
        textAlign: 'center'
    }
});

export default Error