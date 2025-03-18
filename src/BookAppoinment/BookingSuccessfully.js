import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constant/Color';
import AppButton from '../components/AppButton/AppButton';


function BookingSuccessfully() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Icon name={'check-circle'} size={100} color={Colors.GREEN} />
                <View style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: "center", fontFamily: 'Poppins-Bold', fontSize: 25 }}>Your appointment</Text>
                    <Text style={{ textAlign: "center", fontFamily: 'Poppins-Bold', fontSize: 25 }}>booking is successfully.</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: "center", fontFamily: 'Poppins-Regular', fontSize: 15 }}>You can view the appointment booking </Text>
                    <Text style={{ textAlign: "center", fontFamily: 'Poppins-Regular', fontSize: 15 }}>info in the “Appointment” section.</Text>
                </View>

                
                  <View style={{marginTop:60}}>
                    <Text style={{fontFamily:'Poppins-SemiBold',color:Colors.PRIMARY,fontSize:16}}>Go to appointment</Text>
                  </View>
              
            </View>
        </View>
    )
}

export default BookingSuccessfully
