import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constant/Color';
import AppInput from '../components/AppInput/AppInput';
import AppButton from '../components/AppButton/AppButton';
import PasswordInput from '../components/AppInput/PasswordInput';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const navigation = useNavigation();
    
    const navigatetoSignup = () => {
        navigation.navigate("Register");
    };

    return (
        <ScrollView style={{ backgroundColor: Colors.LOGINBG }}>
            <View style={{ paddingTop: 180, paddingHorizontal: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.BLACK }}>Welcome!</Text>
                <View>
                    <Text style={{ marginTop: 10, fontSize: 18, color: Colors.LIGHTTEXT }}>Sign in to continue</Text>
                    <View style={{ marginTop: 40 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
                            <AppInput icon={"mail-outline"} placeholder={"Email"} name={"email"} />
                            <PasswordInput icon={"lock-outline"} placeholder={"Password"} name={"password"} />
                            <AppButton text={"Sign in"}  />
                            <View style={{ display: "flex", alignItems: 'center',alignSelf:"center", flexDirection: "row" }}>
                                <Text>Don’t have an account? </Text>
                                <TouchableOpacity onPress={navigatetoSignup}>
                                    <Text style={{ fontWeight: 'bold', color: Colors.PRIMARY }}>Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Login;
