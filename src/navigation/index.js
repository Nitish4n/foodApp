import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import OrderScreen from '../screens/OrderScreen';

import SignIn from '../screens/Auth/SignIn';

const Stack = createStackNavigator();

const NavigationStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
           
            <Stack.Screen name="Home" component={HomeScreen} options={
                {headerShown: false}
            } />
            <Stack.Screen name="RestaurantDetails" component={RestaurantsScreen} options={
                {headerShown: false}
            }/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default NavigationStack;