import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {

    const { navigation, title } = props

    return (
        <Appbar.Header>
            <Appbar.Action icon="home" onPress={() => navigation.navigate('HomeScreen')} />
            <Appbar.Content
                title={title}
            />
        </Appbar.Header>
    )
}

export default Header;