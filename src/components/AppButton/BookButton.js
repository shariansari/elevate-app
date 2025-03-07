import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../../constant/Color'

function BookButton() {
  return (
   <View style={{flexDirection:'row'}}>
     <View style={{backgroundColor:Colors.PRIMARY,paddingHorizontal:20,paddingVertical:8,borderRadius:10 }} >
      <Text style={{color:'white',fontFamily:'Poppins-SemiBold'}}>Book now</Text>
    </View>
   </View>
  )
}

export default BookButton
