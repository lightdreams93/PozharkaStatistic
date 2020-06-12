import React from 'react'
import ContainerLayout from '../components/layouts/ContainerLayout'
import Form from '../components/home/Form'
import ContentLayout from '../components/layouts/ContentLayout'

const HomeScreen = (props) => {
    const { navigation } = props;
    return (
        <ContainerLayout>
            <ContentLayout centered>
                <Form navigation={navigation} />
            </ContentLayout>
        </ContainerLayout>
    )
}

export default HomeScreen;