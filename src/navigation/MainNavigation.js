import React from 'react'
import { Text, View } from 'react-native'
import TabNavigation from './TabNavigation'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerStyle: { backgroundColor: "pink", }, headerTintColor: "black", headerTitleStyle: {}, headerTitleAlign: 'center' }}>
      <Stack.Screen name="Dashboard" component={TabNavigation} options={({ route }) => ({ headerTitle: getFocusedRouteNameFromRoute(route) })}  /> 

    </Stack.Navigator>
  )
}

export default MainNavigation
