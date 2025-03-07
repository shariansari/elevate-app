import React from 'react'
import { Image, Text, View } from 'react-native'
import Colors from '../../constant/Color'
import Ionicons from 'react-native-vector-icons/Ionicons';


function NearestCard({ image }) {
    return (
        <View>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <Image source={{ uri: image }} style={{ height: 80, width: 80, borderRadius: 20 }} />
                <View>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Bella Rinova</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.LIGHTTEXT }}>6391 Elgin St. Celina, Delaware ...</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Ionicons name={"star"} size={14} color={Colors.YELLOW} />
                            <Ionicons name={"star"} size={14} color={Colors.YELLOW} />
                            <Ionicons name={"star"} size={14} color={Colors.YELLOW} />
                            <Ionicons name={"star"} size={14} color={Colors.YELLOW} />
                            <Ionicons name={"star"} size={14} color={Colors.YELLOW} />
                        </View>
                        <View style={{flexDirection:'row',gap:2}}>
                        <Ionicons name={"location-outline"} size={16} color={Colors.BLACK} />
                        <Text style={{fontFamily:'Poppins-Regular'}}>5 Km</Text>
                        </View>




                    </View>
                </View>

            </View>
        </View>
    )
}

export default NearestCard
