import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Tabs/Profile'
import Daily from '../screens/Tabs/Daily'
import Exam from '../screens/Tabs/Exam'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const InfoRoute = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                initialRouteName: "Профиль",
            })}
            tabBarOptions={{
                activeTintColor: 'crimson',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Профиль', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="briefcase-account" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Daily"
                component={Daily}
                options={{
                    tabBarLabel: 'Дневной тест', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar-check" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Exam"
                component={Exam}
                options={{
                    tabBarLabel: 'Экзамен', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open-page-variant" color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default InfoRoute;