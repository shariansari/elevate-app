import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Platform, TouchableOpacity } from 'react-native';
import Colors from '../constant/Color';
import { OtpInput } from "react-native-otp-entry";
import { HitApi } from '../Api/ApiHIt';
import { sendOtp, verifyOtp } from '../constant/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { _setUserData } from '../storage/Storage';
import { setUserData } from '../redux/Actions/ApiAction';

function VerifyScreen() {
    const ApiReducer = useSelector(state => state.ApiReducer);
    const reduxUser = useSelector(state => state.AuthReducer);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        if (otp.length === 4) {
            setOtpError('');
            console.log('OTP entered:', otp);

            const json = {
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
                else if (res?.data?.message === "User already registered") {

                    console.log("profileData",res?.data?.profileData);
                    _setUserData(res?.data?.profileData);
                    dispatch(setUserData(res?.data?.profileData));
                    navigation.navigate("Dashboard");
                }
            }).catch((error) => {
                console.log("Error verifying OTP:", error);
                setOtpError("Something went wrong. Please try again.");
            });
        }
    }, [otp]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleResendOTP = () => {
        setOtp('');
        setOtpError('');
        setTimer(60);

        HitApi(ApiReducer?.apiJson, sendOtp).then((res) => {
            console.log("Resend OTP Response:", res);
            if (res?.message === "OTP sent successfully") {
                console.log("OTP Resent Successfully");
            }
        }).catch((error) => {
            console.log("Error resending OTP:", error);
            setOtpError("Failed to resend OTP. Try again later.");
        });
    };

     
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
                    Please enter the 4-digit security code we just sent you at{' '}
                    <Text style={{ color: Colors.PRIMARY }}>713-444-xxxx</Text>
                </Text>

                {/* OTP Input */}
                <View style={{ marginTop: 20 }}>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor={Colors.GREEN}
                        onTextChange={setOtp}
                        theme={{ pinCodeContainerStyle: { width: '20%' } }}
                    />
                    <Text style={{ color: Colors.ERROR, marginTop: 5, fontSize: 12, fontFamily: 'Poppins-Regular' }}>
                        {otpError}
                    </Text>
                </View>

                {/* Resend OTP */}
                {timer === 0 ? (
                    <TouchableOpacity style={{ marginTop: 30, alignItems: "center" }} onPress={handleResendOTP}>
                        <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Regular' }}>
                            Resend
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <View style={{ marginTop: 30, alignItems: "center" }}>
                        <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Regular' }}>
                            Resend in {timer} sec
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

export default VerifyScreen;
