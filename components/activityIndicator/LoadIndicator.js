import React from 'react'
import { ActivityIndicator } from 'react-native'
import ContainerLayout from '../layouts/ContainerLayout'
import ContentLayout from '../layouts/ContentLayout'

const LoadIndicator = () => {
    return (
        <ContainerLayout>
            <ContentLayout centered>
                <ActivityIndicator size="large" color="maroon" />
            </ContentLayout>
        </ContainerLayout>
    )
}

export default LoadIndicator