import React from 'react'
import { Image, Text, View } from 'react-native'
import Colors from '../../constant/Color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../../components/search/Search';


function Home() {
  return (
    <View style={{backgroundColor:'white',paddingHorizontal:20,paddingVertical:30}}>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <Image source={require('../../AppImages/girl.jpeg')} style={{ height: 50, width: 50 ,borderRadius:10}} />
         <View style={{flexDirection:"row",gap:15}}>
         <View style={{padding:12,borderWidth:1,borderColor:Colors.ICONBORDER,borderRadius:10}}>
             <Ionicons name={"notifications-outline"} size={20} color={Colors.BLACK} />
          </View>
          <View style={{padding:12,borderWidth:1,borderColor:Colors.ICONBORDER,borderRadius:10}}>
             <Ionicons name={"search-outline"} size={20} color={Colors.BLACK} />
          </View>
         </View>
      </View>
      <View style={{marginTop:Platform.OS === 'ios' ? 25 : 25}}>
        <Text style={{fontFamily:'Poppins-SemiBold',fontSize:25}}>Hi, Robert Fox</Text>
      </View>
      <View style={{flexDirection:'row',gap:5,marginTop:Platform.OS === 'ios' ? 5 :0 }}>
      <Ionicons name={"location-outline"} size={18} color={Colors.LIGHTTEXT} />
      <Text style={{fontFamily:'Poppins-Regular',color:Colors.LIGHTTEXT}}>6391 Elgin St. Celina, Delaware 10299</Text>
      </View>
      <View style={{marginTop:20}}>
        <Search/>
      </View>
    </View>
  )
}

export default Home
