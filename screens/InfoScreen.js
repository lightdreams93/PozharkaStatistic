import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import * as firebase from 'firebase'

import InfoRoute from '../routes/InfoRoute'
import InfoScreenContext from '../components/context/InfoScreenContext'
import LoadIndicator from '../components/activityIndicator/LoadIndicator'
import Error from '../components/error/Error'

const InfoScreen = (props) => {

    const { value } = props.route.params
    const [data, setData] = useState({ loading: true, error: false, errorText: '', data: {} })

   

    useEffect(() => {
        let onValueChanged = firebase.database().ref('/').orderByChild("email").equalTo(value).on('value', snapshot => {

            if (!snapshot.exists()) {
                setData(prev => { return { loading: true, error: true } })
            }
            else {
                snapshot.forEach((childSnapshot) => {
                    setData(prev => { return { loading: false, data: childSnapshot.val() } })
                });
            }
        }, error => {
            setData(prev => { return { loading: true, error: true, errorText: error } })
        })

        return () => firebase.database().ref('/').orderByChild("email").equalTo(value).off('value', onValueChanged)
    }, [])

    if (data.loading) {
        return data.error ? <Error /> : <LoadIndicator />
    } else {
        return (
            <InfoScreenContext.Provider value={data.data}>
                <StatusBar backgroundColor="maroon" barStyle="light-content" />
                <InfoRoute />
            </InfoScreenContext.Provider>
        )
    }
}

export default InfoScreen