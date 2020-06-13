import React from 'react'
import { DataTable, Text } from 'react-native-paper'
import ContentLayout from '../components/layouts/ContentLayout'
import ContainerLayout from '../components/layouts/ContainerLayout'
import InfoScreenContext from '../components/InfoScreenContext'
import Header from '../components/home/Header'

const Daily = (props) => {
    const { navigation } = props
    const data = React.useContext(InfoScreenContext)

    const RightAnswers = (statistics) => {
        let num = 0;
        statistics.statistics.forEach(element => {
            if (element.right)
                num++
        });
        return num
    }

    const TotalAnswers = (statistics) => {
        return statistics.statistics.length
    }

    return (
        <ContainerLayout>
            <Header title="Дневной тест" navigation={navigation} />
            {(data.startQuiz) ?
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Дата</DataTable.Title>
                        <DataTable.Title numeric>Количество ответов</DataTable.Title>
                    </DataTable.Header>
                    {data.startQuiz.statistics.map((element, i) => {
                        return (
                            <DataTable.Row key={i}>
                                <DataTable.Cell>{element.currentDate}</DataTable.Cell>
                                <DataTable.Cell numeric>{`${RightAnswers(element)}/${TotalAnswers(element)}`}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    })}
                </DataTable>
                :
                <ContainerLayout>
                    <ContentLayout centered>
                        <Text style={{ textAlign: 'center' }}>Ничего не найдено!</Text>
                    </ContentLayout>
                </ContainerLayout>
            }
        </ContainerLayout>
    )
}

export default Daily