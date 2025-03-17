

import React from 'react'
import { Image, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import Colors from '../../constant/Color'
import BookButton from '../AppButton/BookButton'
import { useNavigation } from '@react-navigation/native'

function Advertisement() {
  const navigation = useNavigation();
  const handleBookNowPress = () => {
    navigation.navigate('BOOKAPPOINTMENT');
  }
  return (
    <View>
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, marginBottom: 10 }}>offer of the day</Text>

      <View style={{ backgroundColor: Colors.SKIN, height: 180, borderRadius: 20, flexDirection: 'row', alignItems: 'center', borderWidth: 0.1 }}>

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 35 }}>-40%</Text>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13 }}>Vourcher for you next</Text>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13 }}>haircut service</Text>
          <View style={{ marginTop: 10 }}>
            <BookButton onPress={handleBookNowPress} />
          </View>
        </View>
        <View style={{ flex: 1, borderRadius: 20, overflow: 'hidden', height: 185, }}>
          <Image
            source={require('../../AppImages/pinkbg.jpg')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  )
}

export default Advertisement

