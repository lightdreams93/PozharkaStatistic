import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StatusBar } from 'react-native'
import { Text } from 'react-native-paper'
import ContentLayout from '../components/layouts/ContentLayout'
import ContainerLayout from '../components/layouts/ContainerLayout'
import * as firebase from 'firebase'
import InfoRoute from '../routes/InfoRoute'
import InfoScreenContext from '../components/InfoScreenContext'

const InfoScreen = (props) => {
    const { value } = props.route.params
    const [data, setData] = useState({ loading: true, error: false, errorText: '', data: {} })

    useEffect(() => {
        firebase.database().ref('/').orderByChild("email").equalTo(value).on('value', snapshot => {

            if (!snapshot.exists())
                return setData(prev => { return { loading: true, error: true } })

            snapshot.forEach((childSnapshot) => {
                setData(prev => { return { loading: false, data: childSnapshot.val() } })
            });
        }, error => {
            setData(prev => { return { loading: true, error: true, errorText: error } })
        })
    }, [])

    if (data.loading) {
        if (data.error) {
            return (
                <ContainerLayout>
                    <ContentLayout centered>
                        <Text style={{ textAlign: 'center' }}>Что-то пошло не так!</Text>
                    </ContentLayout>
                </ContainerLayout>
            )
        } else {
            return (
                <ContainerLayout>
                    <ContentLayout centered>
                        <ActivityIndicator size="large" color="maroon" />
                    </ContentLayout>
                </ContainerLayout>
            )
        }

    } else {
        return (
            <InfoScreenContext.Provider value={data.data}>
                <StatusBar backgroundColor="maroon" barStyle="light-content" />
                <InfoRoute />
            </InfoScreenContext.Provider>
        )
    }
}

export default InfoScreen;