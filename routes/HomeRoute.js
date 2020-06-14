import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import InfoScreen from '../screens/InfoScreen'
import DetailsScreen from '../screens/DetailsScreen'

const Stack = createStackNavigator();

const HomeRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{
                        title: 'Awesome app',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='InfoScreen'
                    component={InfoScreen}
                    options={{
                        title: 'Статистика',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='DetailsScreen'
                    component={DetailsScreen}
                    options={{
                        title: 'Подробности',
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default HomeRoute;