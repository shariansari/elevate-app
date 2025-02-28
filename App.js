import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import SwitchNavigation from './src/navigation/SwitchNavigation';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex:1}}>
        <SwitchNavigation />
        </SafeAreaView>
      </NavigationContainer>

    </Provider>

  )
}

export default App
