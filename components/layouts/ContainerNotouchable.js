import React from 'react';
import { View, StyleSheet } from 'react-native';

const ContainerLayout = (props) => {

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ContainerLayout;