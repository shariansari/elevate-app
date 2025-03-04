import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from '../constant/Color';
import PhoneInput from '../components/AppInput/PhoneInput';
import AppButton from '../components/AppButton/AppButton';

function Login() {
    return (
        <ScrollView
            style={{ backgroundColor: Colors.LOGINBG, flex: 1 }}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}
        >
            <View style={{ width: '80%', paddingTop: 50 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.BLACK }}>
                    Your phone!
                </Text>
                <Text style={{ marginTop: 10, fontSize: 15, color: Colors.LIGHTTEXT }}>
                    A 4-digit security code will be sent via SMS to verify your mobile number!
                </Text>
                <View style={{ marginTop: 50, width: '100%' }}>
                    <PhoneInput />
                </View>
                <View style={{ marginTop: 40 }}>
                    <AppButton text={'Continue'} />
                </View>
            </View>
        </ScrollView>
    );
}

export default Login;
