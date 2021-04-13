import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../pages/Dashboard'
import AddMovimentation from '../pages/AddMovimentation'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#9C17A1'}
        }}
    >
        <Auth.Screen name="Dashboard" component={Dashboard} />
        <Auth.Screen name="AddMovimentation" component={AddMovimentation} />
    </Auth.Navigator>
)

export default AuthRoutes