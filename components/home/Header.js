import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {
    return (
        <Appbar.Header>
            <Appbar.Action icon="home" />
            <Appbar.Content
                title={props.title}
            />
        </Appbar.Header>
    )
}

export default Header;