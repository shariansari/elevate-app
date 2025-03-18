import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../../constant/Color'
import AppoinmentCard from '../../components/cards/AppoinmentCard'
import BookingTabs from './BookingTabs'

function Booking() {
  return (
    <View style={{padding:20,backgroundColor:'white'}}>
      <Text style={{fontFamily:'Poppins-SemiBold',fontSize:20}}>Your Appointments</Text>
      <View style={{marginTop:30}}>
        <BookingTabs/>
      </View>
      <View style={{marginTop:30}}>
     <View style={{flexDirection:'column',gap:20}}>
     <AppoinmentCard/> 
      <AppoinmentCard/> 
      <AppoinmentCard/> 
     </View>
      </View>
    </View>
  )
}

export default Booking
