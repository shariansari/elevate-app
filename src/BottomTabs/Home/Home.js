import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Colors from '../../constant/Color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../../components/search/Search';
import Services from '../../components/Services/Services';
import Advertisement from '../../components/Advertisement/Advertisement';
import NearestCard from '../../components/cards/NearestCard';
import { useSelector } from 'react-redux';
import { getGreeting } from '../../utils/utils';


function Home() {
  const reduxUser = useSelector(state => state.AuthReducer);
  
  const userName = reduxUser?.doc?.name || "User";


  const getInitials = (name) => {
    const nameParts = name.split(" ").filter(n => n);
    if (nameParts.length >= 2) {
      return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
    } else {
      return nameParts[0]?.slice(0, 2).toUpperCase();
    }
  };



  const displayText = getInitials(userName);




  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 30 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          {userName ? (
            <View style={{
              height: 50, width: 50, borderRadius: 10,
              backgroundColor: Colors.ICONBORDER, alignItems: 'center', justifyContent: 'center'
            }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.BLACK }}>{displayText}</Text>
            </View>
          ) : (
            <Image source={require('../../AppImages/girl.jpeg')} style={{ height: 50, width: 50, borderRadius: 10 }} />
          )}
          <View style={{ flexDirection: "row", gap: 15 }}>
            <View style={{ padding: 12, borderWidth: 1, borderColor: Colors.ICONBORDER, borderRadius: 10 }}>
              <Ionicons name={"notifications-outline"} size={20} color={Colors.BLACK} />
            </View>
            <View style={{ padding: 12, borderWidth: 1, borderColor: Colors.ICONBORDER, borderRadius: 10 }}>
              <Ionicons name={"search-outline"} size={20} color={Colors.BLACK} />
            </View>
          </View>
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
          <View>
            <Text style={{ color: Colors.LIGHTTEXT, fontFamily: 'Poppins-Regular' }}>View All</Text>
          </View>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'column', gap: 20 }}>
          <NearestCard image={'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27'} />
          <NearestCard image={'https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80%27'} />
          <NearestCard image={'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80%27'} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home



