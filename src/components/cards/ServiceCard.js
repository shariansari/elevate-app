import React from 'react'
import { Image, Text, View } from 'react-native'

function ServiceCard({ plan }) {

    console.log("plan", plan);

    return (
        <View style={{ flexDirection: 'column' }}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80%27' }} style={{ height: 85, width: 85, borderRadius: 20 }} />
            <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 5, fontSize: 13, textAlign: 'center' }}>{plan?.name}</Text>
        </View>
    )
}

export default ServiceCard
