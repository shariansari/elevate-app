import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../constant/Color'
import Search from '../../components/search/Search';
import Services from '../../components/Services/Services';
import Advertisement from '../../components/Advertisement/Advertisement';
import { useSelector } from 'react-redux';
import { getGreeting } from '../../utils/utils';
import BestServices from '../../components/Services/BestServices';
import { useNavigation } from '@react-navigation/native';
import Screens from '../../constant/Screens';
import Ionicons from 'react-native-vector-icons/Ionicons';



function Home() {
  const reduxUser = useSelector(state => state.AuthReducer);
  const navigation = useNavigation()

  const navigateToCart = () =>{
    navigation.navigate(Screens.CART)
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingVertical:20 ,paddingBottom:50}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" ,alignItems:'center'}}>
          <Image source={require('../../AppImages/Board.png')} style={{ height: 50, width: 100, resizeMode: 'contain', marginLeft: -5 }} />
       <TouchableOpacity onPress={navigateToCart}>
       <Ionicons name={'cart-outline'} size={30} color={Colors.SECONDARY} />
       </TouchableOpacity>
        </View>
        <View style={{ marginTop: Platform.OS === 'ios' ? 25 : 25 }}>
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 25 }}>
            {`Hi, ${reduxUser?.doc?.name?.split(" ")[0] + " " + reduxUser?.doc?.name?.split(" ")[1]} `}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 5, marginTop: Platform.OS === 'ios' ? 5 : 0 }}>
          <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.LIGHTTEXT }}> {getGreeting()}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Search />
        </View>
        <View style={{ marginTop: 20 }}>
          <Advertisement />
        </View>
        <View>
          <Services />
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>Our Best Services</Text>
        </View>
        <View>
          <BestServices />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home



