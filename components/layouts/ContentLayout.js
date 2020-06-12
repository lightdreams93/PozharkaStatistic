import React from 'react'
import { View, StyleSheet } from 'react-native'

const ContentLayout = (props) => {
    return (
        props.centered ?
            <View style={styles.contentCentered}>{props.children}</View> :
            <View style={styles.content}>{props.children}</View>
    )
}

export default ContentLayout;

const styles = StyleSheet.create({
    contentCentered: {
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1,
        justifyContent: 'center'
    },

    content: {
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1
    }
});
