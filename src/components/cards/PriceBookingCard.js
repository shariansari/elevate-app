import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../constant/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';


function PriceBookingCard({ data }) {
    console.log("data", data);
    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Ionicons
                key={index}
                name={"star"}
                size={14}
                color={index < rating ? Colors.YELLOW : Colors.LIGHTTEXT}
            />
        ));
    };

    return (
        <View  style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80' }}
                style={{ height: 80, width: 80, borderRadius: 20 }}
            />
            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>{data.service}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.PRIMARY }}>{`Price: ${data.price}`}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        {renderStars(data.rating)}
                    </View>

                    <TouchableOpacity style={{ backgroundColor: Colors.SECONDARY, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8 }}>
                        <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-Regular' }}>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PriceBookingCard
