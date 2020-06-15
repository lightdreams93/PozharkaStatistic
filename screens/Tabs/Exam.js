import React from 'react'
import InfoScreenContext from '../../components/context/InfoScreenContext'
import Header from '../../components/home/Header'
import TableData from '../../components/Info/Table/GeneralInfoTest/TableData'
import ContainerNotouchable from '../../components/layouts/ContainerNotouchable'
import { useFocusEffect, StackActions } from '@react-navigation/native'
import { BackHandler } from 'react-native'

const Exam = (props) => {
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
        <>
            <Header title="Экзамен" navigation={navigation} />
            <ContainerNotouchable>
                <TableData data={data.examQuiz} navigation={navigation} />
            </ContainerNotouchable>
        </>
    )
}

export default Exam