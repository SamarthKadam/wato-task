import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../pages/Signin'
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (<NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="SignUp" component={Signup} />
      </Stack.Navigator>
      </NavigationContainer>)
}