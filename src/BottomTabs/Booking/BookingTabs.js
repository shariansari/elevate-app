import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../../constant/Color'

function BookingTabs() {
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
     <View style={{backgroundColor:Colors.BLACK,width:'48%',alignItems:'center',justifyContent:'center',paddingVertical:10,borderRadius:12}}>
     <Text style={{color:'white',fontFamily:'Poppins-Medium'}}>Upcoming</Text>
     </View>
     <View  style={{backgroundColor:'white',width:'48%',flexDirection:'row',alignItems:'center',justifyContent:'center',borderColor:Colors.BLACK,borderWidth:1,paddingVertical:10,borderRadius:12}}>
     <Text  style={{color:Colors.BLACK,fontFamily:'Poppins-Medium'}}>Pass</Text>
     </View>
    </View>
  )
}

export default BookingTabs
