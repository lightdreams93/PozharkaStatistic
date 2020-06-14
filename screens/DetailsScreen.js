import React from 'react';
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'
import ContainerNotouchable from '../components/layouts/ContainerNotouchable'
import Header from '../components/home/Header'

const DetailsScreen = (props) => {

    const { navigation } = props;
    const { data, index } = props.route.params

    return (
        <>
            <Header title="Детали" navigation={navigation} />
            <ScrollView>
                <ContainerNotouchable>
                    {data.statistics[index].statistics.map((element, i) => {
                        return (
                            <List.Item key={i}
                                title={`Вопрос ${i + 1}: ${element.currentQuestion}`}
                                description={`Ответ: ${element.answer}`}
                                titleNumberOfLines={10}
                                descriptionNumberOfLines={10}
                                left={props => <List.Icon color={element.right ? "limegreen" : "crimson"} icon={element.right ? "check-bold" : "alert-circle-outline"} />}
                            />
                        )

                    })}
                </ContainerNotouchable>
            </ScrollView>
        </>
    )
}

export default DetailsScreen