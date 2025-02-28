import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../constant/Color'

function AppButton({text,onPress}) {

  return (
  <TouchableOpacity onPress={onPress}>
      <View style={{backgroundColor:Colors.PRIMARY ,alignItems:'center',paddingVertical:20,borderRadius:15 }}>
      <Text style={{fontSize:16,fontWeight:'bold',color:"white" }}>{text}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default AppButton