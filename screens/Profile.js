import React, { useContext } from 'react'
import { Text } from 'react-native'
import ContentLayout from '../components/layouts/ContentLayout'
import ContainerLayout from '../components/layouts/ContainerLayout'
import InfoScreenContext from '../components/InfoScreenContext'
import Header from '../components/home/Header'

const Profile = () => {
    const data = React.useContext(InfoScreenContext)
    return (
        <ContainerLayout>
            <Header title="Профиль" />
            <ContentLayout>
                <Text>{data.email}</Text>
            </ContentLayout>
        </ContainerLayout>
    )
}

export default Profile