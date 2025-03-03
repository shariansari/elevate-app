import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Colors from '../constant/Color'

function Login() {
  return (
    <ScrollView style={{ backgroundColor: Colors.LOGINBG }}>
    <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.BLACK }}>Your phone!</Text>
        <View>
            <Text style={{ marginTop: 10, fontSize: 15, color: Colors.LIGHTTEXT }}>A 4 digit security code will be sent via SMS to verify your mobile number!</Text>
          
        </View>
    </View>
</ScrollView>
  )
}

export default Login
