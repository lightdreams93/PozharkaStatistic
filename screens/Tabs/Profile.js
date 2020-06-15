import React, { useLayoutEffect } from 'react'
import { List } from 'react-native-paper'
import InfoScreenContext from '../../components/context/InfoScreenContext'
import Header from '../../components/home/Header'
import ContainerNotouchable from '../../components/layouts/ContainerNotouchable'
import { useFocusEffect, StackActions } from '@react-navigation/native'
import { BackHandler } from 'react-native'

const Profile = (props) => {

    const { navigation } = props
    const data = React.useContext(InfoScreenContext)
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.dispatch(
                    StackActions.replace('HomeScreen')
                );
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );

    return (
        <ContainerNotouchable>
            <Header title="Профиль" navigation={navigation} />
            <List.Item
                title="ФИО"
                description={`${data.userSurname} ${data.userName}`}
                left={props => <List.Icon {...props} icon="account" />}
            />
            <List.Item
                title="Email"
                description={data.email}
                left={props => <List.Icon {...props} icon="email-newsletter" />}
            />
            <List.Item
                title="Время в игре"
                description={`${Math.trunc(((data.timeGame / 3600) * 100) / 100)} часов ${Math.trunc(((data.timeGame % 3600 / 60) * 100) / 100)} минут`}
                left={props => <List.Icon {...props} icon="account-clock" />}
            />
        </ContainerNotouchable>
    )
}

export default Profile