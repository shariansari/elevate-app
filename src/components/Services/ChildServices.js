import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import NearestCard from '../cards/NearestCard'
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constant/Color';
import { useNavigation } from '@react-navigation/native';
import Search from '../search/Search';


function ChildServices() {
    const ServiceReducer = useSelector(state => state.ServiceReducer);
    const navigation = useNavigation()

    console.log("ServiceReducer", ServiceReducer);

    const handleBack = () => {
        navigation.goBack()
    }


    return (
        <View style={{ padding: 20, flexDirection: 'column', alignItems: 'center', gap: 20, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%', alignItems: 'center' }}>
                <TouchableOpacity onPress={handleBack} >
                    <Ionicons name={"arrow-back-outline"} size={22} color={Colors.BLACK} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18 }}>{ServiceReducer?.selectedService}</Text>
                </View>
                <Text></Text>
            </View>
            <View style={{ width: '100%' }}>
                <Search />
            </View>
            <View style={{marginTop:30,flexDirection:'column',gap:20}}>
                <NearestCard image='https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'/>
                <NearestCard image='https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'/>
                <NearestCard image='https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'/>


            </View>

        </View>
    )
}

export default ChildServices
