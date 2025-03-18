import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../constant/Color'

function BookButton({onPress}) {
  return (
   <TouchableOpacity style={{flexDirection:'row'}} onPress={onPress}>
     <View style={{backgroundColor:Colors.SECONDARY,paddingHorizontal:20,paddingVertical:8,borderRadius:10 }} >
      <Text style={{color:'white',fontFamily:'Poppins-SemiBold'}}>Book now</Text>
    </View>
   </TouchableOpacity>
  )
}

export default BookButton
