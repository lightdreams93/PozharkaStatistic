import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile'
import Daily from '../screens/Daily'
import Exam from '../screens/Exam'

const Tab = createBottomTabNavigator();

const InfoRoute = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Daily" component={Daily} />
            <Tab.Screen name="Exam" component={Exam} />
        </Tab.Navigator>
    )
}

export default InfoRoute;