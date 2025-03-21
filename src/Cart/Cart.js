import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, Vibration } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Color';
import { HitApi } from '../Api/ApiHIt';
import { addCart, deleteCart, searchCart } from '../constant/Constant';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Screens from '../constant/Screens';

function Cart() {
  const reduxUser = useSelector((state) => state.AuthReducer);
  const [cartData, setCartData] = useState([]);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      const json = {
        page: 1,
        limit: 10,
        search: {
          userId: reduxUser?.doc?._id
        }
      };

      const res = await HitApi(json, searchCart);

      if (res?.message === 'Cart items retrieved successfully') {
        setCartData(res?.data); // ✅ Fixed state update
      } else {
        console.error('Failed to fetch cart items:', res?.message);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };


  const handleBookAppointment = () => {
    navigation.navigate(Screens.BOOKAPPOINTMENT)
  };

  const addToCart = (service) => {
    Vibration.vibrate(500);
    console.log("service++++", service);
    const json = {
      serviceId: service?.serviceId?._id,
      userId: reduxUser?.doc?._id,
    };

    HitApi(json,addCart).then((res)=>{
      console.log("res",res);
      if(res?.message === "Service added to Cart successfully"){
        getCartItems()
      }
      
    })
  }

  const removeFromCart = (service) =>{
    Vibration.vibrate(500);
    const json = {
      serviceId: service?.serviceId?._id,
      userId: reduxUser?.doc?._id,
    };

    HitApi(json,deleteCart).then((res)=>{
      if(res?.message === "Cart service deleted successfully"){
        getCartItems()
      }
    })
  }

  const increaseQuantity = (service) => {
    addToCart(service);
  };

  const decreaseQuantity = (service) => {
    removeFromCart(service);
  };


  console.log("cartData", cartData);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <TouchableOpacity onPress={handleBack}>
            <Ionicons name="arrow-back-outline" size={22} color={Colors.BLACK} />
          </TouchableOpacity>
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18 }}>Checkout Cart</Text>
          <View style={{ width: 22 }} />
        </View>
      </View>

      {cartData.length > 0 ? (
        <View style={{ marginTop: 20, flex: 1 }}>
          {cartData.map((service, index) => (
            <View
              key={service._id || index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 10,
                marginBottom: 10,
                borderColor: Colors.PRIMARY
              }}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80' }}
                style={{ height: 60, width: 60, borderRadius: 20 }}
              />

              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>{service?.serviceId?.service}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.PRIMARY }}>{`Price: ₹${service.totalPrice}`}</Text>
              </View>

              {/* Quantity Controls */}
              <View style={{ backgroundColor: Colors.SECONDARY, paddingHorizontal: 15, borderRadius: 10, flexDirection: 'row', gap: 10, paddingVertical: 5 }}>
                <TouchableOpacity onPress={() => decreaseQuantity(service)}>
                  <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold' }}>-</Text>
                </TouchableOpacity>
                <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold' }}>{service?.count}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(service)}>
                  <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>No items in cart</Text>
      )}

      {cartData.length > 0 && (
        <TouchableOpacity
          onPress={handleBookAppointment}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20
          }}>
          <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Book Appointment</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
export default Cart;
