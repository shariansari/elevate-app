import React from 'react'
import { Image, Text, View } from 'react-native'
import Colors from '../../constant/Color'

function AppoinmentCard() {
  return (
    <View style={{borderWidth:1,borderRadius:20,paddingVertical:15,paddingHorizontal:20,borderColor:Colors.ICONBORDER}}>
      <Text style={{fontFamily:'Poppins-Bold',fontSize:18}}>12 September 2021, 08:00</Text>
      <View style={{marginTop:10}}>
         <View style={{flexDirection:"row",gap:20}}>
         <Image source={{ uri: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27' }} style={{ height: 80, width: 100, borderRadius: 20 }} />
          <View>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:16}}>Bella Rinova</Text>
            <Text style={{fontFamily:'Poppins-Regular',fontSize:12,color:Colors.LIGHTTEXT}}>6391 Elgin St. Celina, Dela...</Text>
            <Text style={{width:'60%',fontFamily:'Poppins-Regular',color:Colors.PRIMARY,fontSize:13}}>Services: Regular haircut, Classic shaving</Text>
          </View>
         </View>
      </View>
    </View>
  )
}

export default AppoinmentCard
