import React from 'react'
import { Text, View } from 'react-native'
import NearestCard from '../components/cards/NearestCard'
import Colors from '../constant/Color'
import AppButton from '../components/AppButton/AppButton'
import { useNavigation } from '@react-navigation/native'

function BookingFinalized() {
    const navigation = useNavigation()
    const handlePress = () => {
        navigation.navigate("BOOKINGSUCCESSFULLY")
    }
    return (
        <View style={{ padding: 20, backgroundColor: "white", flex: 1 }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20 }}>Book Appointment</Text>
            <View style={{ marginTop: 20 }}>
                <NearestCard image={'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27'} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Services</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View >
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15 }}>Regular haircut</Text>
                    </View>
                    <View>
                        <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-SemiBold', fontSize: 15 }}>$5.00</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View >
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15 }}>Classic shaving</Text>
                    </View>
                    <View>
                        <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-SemiBold', fontSize: 15 }}>$5.00</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18 }}>Date & Time</Text>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: Colors.PRIMARY }}>12 September, 12:00</Text>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18 }}>Payment Method</Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 30, justifyContent: "space-between" }}>
                <View style={{ width: "48%" }}>
                    <AppButton text={"Cancel"} bg={"white"} color={"black"} onPress={() => navigation.goBack()} />
                </View>
                <View style={{ width: "48%" }}>
                    <AppButton text={"Continue"} icon={"chevron-right"} onPress={handlePress} />
                </View>
            </View>
        </View>
    )
}

export default BookingFinalized
