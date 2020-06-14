import React from 'react'
import { ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper'

const Table = (props) => {

    const { data, navigation } = props

    const RightAnswers = (statistics) => {
        let num = 0;
        statistics.statistics.forEach(element => {
            if (element.right)
                num++
        });
        return num
    }

    return (
        <ScrollView>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Дата/Время</DataTable.Title>
                    <DataTable.Title numeric>Правильных ответов</DataTable.Title>
                </DataTable.Header>
                {data.statistics.map((element, i) => {
                    return (
                        <DataTable.Row key={i} onPress={() => navigation.navigate('DetailsScreen', { data: data, index: i })}>
                            <DataTable.Cell>{element.currentDate}</DataTable.Cell>
                            <DataTable.Cell numeric>{RightAnswers(element)}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })}
            </DataTable>
        </ScrollView>
    )
}

export default Table