import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Color';
import { HitApi } from '../Api/ApiHIt';
import { searchCart } from '../constant/Constant';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


function Cart() {
  const reduxUser = useSelector(state => state.AuthReducer);
  const navigation = useNavigation()
  const handleBack = () => {
    navigation.goBack();
  };


   useEffect(()=>{
    getCartItems()
   })
  const getCartItems = () =>{
    var json ={
      page :1,
      limit:10,
      search :{
        userId :reduxUser?.doc?._id
      }
    }
    HitApi(json ,searchCart).then((res)=>{

    })
  }
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%', alignItems: 'center' }}>
          <TouchableOpacity onPress={handleBack}>
            <Ionicons name="arrow-back-outline" size={22} color={Colors.BLACK} />
          </TouchableOpacity>
          <View>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18 }}>Checkout Cart</Text>
          </View>
          <View style={{ width: 22 }} />
        </View>
      </View>
    </View>
  )
}

export default Cart
