import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {

    const handleHome = () => {
        props.navigation.navigate('HomeScreen')
    }

    return (
        <Appbar.Header>
            <Appbar.Action icon="home" onPress={() => { handleHome() }} />
            <Appbar.Content
                title={props.title}
            />
        </Appbar.Header>
    )
}

export default Header;