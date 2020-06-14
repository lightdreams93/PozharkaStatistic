import React, { useState, useEffect } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { List } from 'react-native-paper'

import ContainerNotouchable from '../components/layouts/ContainerNotouchable'
import Header from '../components/home/Header'
import Error from '../components/error/Error'
import LoadIndicator from '../components/activityIndicator/LoadIndicator'
import * as firebase from 'firebase'

const StudentsScreen = (props) => {

    const { navigation } = props
    const { value } = props.route.params

    const [data, setData] = useState({ loading: true, error: false, data: [] })

    const getFromDatabase = (value) => {
        firebase.database().ref('/').orderByChild("keyWord").equalTo(value).on('value', snapshot => {

            let tempData = [];
            snapshot.forEach((childSnapshot) => {
                tempData.push(childSnapshot.val())
            });

            tempData.length === 0 ? setData({ loading: true, error: true }) : setData({ loading: false, data: tempData })
        }, error => {
            setData({ loading: true, error: true })
        })
    }

    useEffect(() => {
        getFromDatabase(value)
    }, [])
    if (data.loading) {
        return data.error ? <Error /> : <LoadIndicator />
    } else {
        return (
            <>
                <StatusBar backgroundColor="maroon" barStyle="light-content" />
                <Header title="Студенты" navigation={navigation} />
                <ScrollView>
                    <ContainerNotouchable>
                        {data.data.map((children, i) => {
                            return (
                                <List.Item
                                    key={i}
                                    onPress={() => navigation.navigate('InfoScreen', { value: children.email })}
                                    title={`${children.userSurname} ${children.userName}`}
                                    description={`${children.email}`}
                                    left={props => <List.Icon {...props} icon="account" />}
                                />
                            )
                        })}
                    </ContainerNotouchable>
                </ScrollView>
            </>
        )
    }
}

export default StudentsScreen