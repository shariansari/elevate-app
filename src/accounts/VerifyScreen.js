import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Colors from '../constant/Color'
import { OtpInput } from "react-native-otp-entry";
import AppButton from '../components/AppButton/AppButton';


function VerifyScreen() {
    const handleClick = () =>{

    }
    return (
        <ScrollView
            style={{ backgroundColor: Colors.LOGINBG, flex: 1 }}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}
        >
            <View style={{ width: '80%', paddingTop: Platform.OS === 'ios' ? 0 : 50 }}>
                <Text style={{ fontSize: 30, color: Colors.BLACK, fontFamily: 'Poppins-Bold' }}>
                    Verify phone
                </Text>

                <Text style={{ marginTop: 10, color: Colors.LIGHTTEXT, fontFamily: 'Poppins-Regular' }}>
                    Please enter the 4 digit security code we just sent you at <Text style={{color:Colors.PRIMARY}}>713-444-xxxx</Text> 
                </Text>
               <View style={{marginTop:20}}>
               <OtpInput numberOfDigits={4} focusColor={Colors.GREEN} onTextChange={(text) => console.log(text)} theme={{pinCodeContainerStyle: styles.pinCodeContainerStyle}} />
               </View>
             <View style={{marginTop:30}}>
             <AppButton text={'Verify OTP'} onPress={handleClick} />
             </View>
            <View style={{marginTop:30,alignItems:"center"}}>
            <Text style={{color:Colors.PRIMARY ,fontFamily:'Poppins-Regular'}} >
               Resend in 40 Sec
               </Text>
            </View>
             </View>
        </ScrollView>
    )
}

export default VerifyScreen


const styles = StyleSheet.create({

    pinCodeContainerStyle: {
        width: '20%',
    },
})