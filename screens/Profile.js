import React, { useContext } from 'react'
import { Text } from 'react-native'
import { List } from 'react-native-paper'
import ContentLayout from '../components/layouts/ContentLayout'
import ContainerLayout from '../components/layouts/ContainerLayout'
import InfoScreenContext from '../components/InfoScreenContext'
import Header from '../components/home/Header'

const Profile = (props) => {

    const { navigation } = props
    const data = React.useContext(InfoScreenContext)

    return (
        <ContainerLayout>
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
        </ContainerLayout>
    )
}

export default Profile