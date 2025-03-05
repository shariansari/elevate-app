import React from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../accounts/Login';
import Register from '../accounts/Register';
import VerifyScreen from '../accounts/VerifyScreen';

const Stack = createNativeStackNavigator();



function LoginNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="verify" component={VerifyScreen} />


  </Stack.Navigator>
  )
}

export default LoginNavigation
