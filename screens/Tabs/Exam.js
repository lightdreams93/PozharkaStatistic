import React from 'react'
import InfoScreenContext from '../../components/context/InfoScreenContext'
import Header from '../../components/home/Header'
import TableData from '../../components/Info/Table/GeneralInfoTest/TableData'
import ContainerNotouchable from '../../components/layouts/ContainerNotouchable'

const Exam = (props) => {
    const { navigation } = props
    const data = React.useContext(InfoScreenContext)
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