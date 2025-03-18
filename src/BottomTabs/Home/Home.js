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
import BestServices from '../../components/Services/BestServices';


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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={require('../../AppImages/Board.png')} style={{ height: 50, width: 100, resizeMode: 'contain', marginLeft: -5 }} />
          {userName ? (
            <View style={{ height: 50, width: 50, borderRadius: 10, backgroundColor: Colors.ICONBORDER, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.BLACK }}>{displayText}</Text>
            </View>
          ) : (
            <Image source={require('../../AppImages/girl.jpeg')} style={{ height: 50, width: 50, borderRadius: 10 }} />
          )}
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



