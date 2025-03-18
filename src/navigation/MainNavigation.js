import React from 'react'
import { Text, View } from 'react-native'
import TabNavigation from './TabNavigation'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookAppoinment from '../BookAppoinment/BookAppoinment';
import BookingFinalized from '../BookAppoinment/BookingFinalized';
import BookingSuccessfully from '../BookAppoinment/BookingSuccessfully';
import ChildServices from '../components/Services/ChildServices';
import Screens from '../constant/Screens';


const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerStyle: { backgroundColor: "pink", }, headerTintColor: "black", headerTitleStyle: {}, headerTitleAlign: 'center' }}>
      <Stack.Screen name="Dashboard" component={TabNavigation} options={({ route }) => ({ headerTitle: getFocusedRouteNameFromRoute(route) })} />
      <Stack.Screen name={Screens.BOOKAPPOINTMENT} component={BookAppoinment} />
      <Stack.Screen name={Screens.BOOKINGFINALIZED} component={BookingFinalized} />
      <Stack.Screen name={Screens.BOOKINGSUCCESSFULLY} component={BookingSuccessfully} />
      <Stack.Screen name={Screens.CHILDSERVICES} component={ChildServices} />

    </Stack.Navigator>
  )
}

export default MainNavigation
