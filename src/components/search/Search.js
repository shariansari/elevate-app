import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constant/Color';


function Search() {
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:Colors.SKIN,paddingHorizontal:20,paddingVertical:Platform.OS === 'ios' ? 15 :5,borderRadius:12}}>
      <View style={{flexDirection:"row",alignItems:'center',gap:10}}>
      <Ionicons name={"search-outline"} size={20} color={Colors.PLACEHOLDERTEXT} />
      <TextInput placeholder='Search by salons' placeholderTextColor={Colors.PLACEHOLDERTEXT} style={{fontFamily:'Poppins-Regular',fontSize:15}} />
      </View>
      <View>
      <Ionicons name={"options-outline"} size={20} color={Colors.BLACK} />
      </View>
    </View>
  )
}

export default Search
