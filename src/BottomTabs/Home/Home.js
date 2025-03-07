import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Colors from '../../constant/Color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../../components/search/Search';
import Services from '../../components/Services/Services';
import Advertisement from '../../components/Advertisement/Advertisement';
import NearestCard from '../../components/cards/NearestCard';


function Home() {
  return (
  <ScrollView>
      <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 30 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Image source={require('../../AppImages/girl.jpeg')} style={{ height: 50, width: 50, borderRadius: 10 }} />
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
        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 25 }}>Hi, Robert Fox</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 5, marginTop: Platform.OS === 'ios' ? 5 : 0 }}>
        <Ionicons name={"location-outline"} size={18} color={Colors.LIGHTTEXT} />
        <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.LIGHTTEXT }}>6391 Elgin St. Celina, Delaware 10299</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Search />
      </View>
      <View>
        <Services />
      </View>
      <View style={{ marginTop: 20 }}>
        <Advertisement />
      </View>
      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>Nearest salon</Text>
        <View>
          <Text style={{ color: Colors.LIGHTTEXT, fontFamily: 'Poppins-Regular' }}>View All</Text>
        </View>
      </View>
      <View style={{marginTop:10 ,flexDirection:'column',gap:20}}>
      <NearestCard image={'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27'} />
      <NearestCard image={'https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80%27'} />
      <NearestCard image={'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80%27'} />


      </View>
    </View>
  </ScrollView>
  )
}

export default Home
