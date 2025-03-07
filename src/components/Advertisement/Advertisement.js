import React from 'react'
import { Image, Text, View } from 'react-native'
import Colors from '../../constant/Color'
import BookButton from '../AppButton/BookButton'

function Advertisement() {
    return (
        <View style={{ backgroundColor: Colors.SKIN, height: 180, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 35 }}>-40%</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13 }}>Vourcher for you next</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13 }}>haircut service</Text>
                <View style={{ marginTop: 10 }}>
                    <BookButton />
                </View>
            </View>
            <View style={{ flex: 1, borderRadius: 20, overflow: 'hidden', height: 185, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6, elevation: 8, }}>
                <Image
                    source={require('../../AppImages/pinkbg.jpg')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />
            </View>
        </View>
    )
}

export default Advertisement
