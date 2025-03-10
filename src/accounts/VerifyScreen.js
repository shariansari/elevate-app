import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import Colors from '../constant/Color';
import { OtpInput } from "react-native-otp-entry";
import { HitApi } from '../Api/ApiHIt';
import { sendOtp, verifyOtp } from '../constant/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { _getUserData, _setUserData } from '../storage/Storage';
import { setUserData } from '../redux/Actions/ApiAction';


function VerifyScreen() {
    const ApiReducer = useSelector(state => state.ApiReducer);
    const reduxUser = useSelector(state => state.AuthReducer);

    const navigation = useNavigation();
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const [timer, setTimer] = useState(60);
    const dispatch = useDispatch()

    useEffect(() => {
        if (otp.length === 4) {
            setOtpError('');
            console.log('OTP entered:', otp);

            let json = {
                contact: ApiReducer?.apiJson?.contact,
                otp: otp
            };

            HitApi(json, verifyOtp).then((res) => {
                console.log("res", res);
                if (res?.message === "Invalid OTP or OTP expired") {
                    setOtpError('Invalid OTP entered *');
                }
                else if (res?.data?.isProfileCompleted === false && res?.message === "OTP verified successfully") {
                    console.log("Navigating to Register...");
                    navigation.navigate("Register");
                }
                else if (res?.message === "User already registered") {



                    _setUserData(res?.data?.profileData)
                    dispatch(setUserData(res.data?.profileData))
                    navigation.navigate("Dashboard")

                }
            });
        }
    }, [otp]);




    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);



    const handleResendOTP = () => {
        setOtp('')
        setOtpError('')
        setTimer(60)
        HitApi(ApiReducer?.apiJson, sendOtp).then((res) => {
            console.log("res", res);
            if (res?.message === "OTP sent successfully") {
                navigation.navigate("verify");
            }
        })
    }



    console.log("reduxUser", reduxUser);




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
                    Please enter the 4-digit security code we just sent you at <Text style={{ color: Colors.PRIMARY }}>713-444-xxxx</Text>
                </Text>

                {/* OTP Input */}
                <View style={{ marginTop: 20 }}>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor={Colors.GREEN}
                        onTextChange={setOtp}
                        theme={{ pinCodeContainerStyle: styles.pinCodeContainerStyle }}
                    />
                    <View>
                        <Text style={{ color: Colors.ERROR, marginTop: 5, fontSize: 12, fontFamily: 'Poppins-Regular' }}>{otpError}</Text>
                    </View>
                </View>
                {/* Resend OTP */}
                {timer === 0 ? <TouchableOpacity style={{ marginTop: 30, alignItems: "center" }} onPress={handleResendOTP}>
                    <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Regular' }}>
                        Resend
                    </Text>
                </TouchableOpacity> :
                    <View style={{ marginTop: 30, alignItems: "center" }}>
                        <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Regular' }}>
                            Resend in {timer} Sec
                        </Text>
                    </View>
                }
            </View>
        </ScrollView>
    );
}
export default VerifyScreen;
const styles = StyleSheet.create({
    pinCodeContainerStyle: {
        width: '20%',
    },
});
