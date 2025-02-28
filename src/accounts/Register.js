import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constant/Color';
import AppInput from '../components/AppInput/AppInput';
import AppButton from '../components/AppButton/AppButton';
import PasswordInput from '../components/AppInput/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import { RegisterValidation } from '../validationScheema/RegisterValidation';
import { useDispatch, useSelector } from 'react-redux';
import { setApiErrorJson } from '../redux/Actions/ApiAction';
import { SET_API_JSON_ERROR } from '../redux/ActionName/ActionName';
import { REGXEMAIL } from '../constant/Regex';


function Register() {
    const ApiReducer = useSelector(state => state.ApiReducer);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const navigatetoSignIn = () => {
        navigation.navigate("Login");
    };


    const handleClick = ()=>{
        RegisterValidation(ApiReducer?.apiJson).then((error)=>{
            console.log("error",error);
            dispatch(setApiErrorJson(error, SET_API_JSON_ERROR))
        })

    }

    return (
        <ScrollView style={{ backgroundColor: Colors.LOGINBG }}>
            <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.BLACK }}>Sign up</Text>
                <View>
                    <Text style={{ marginTop: 10, fontSize: 18, color: Colors.LIGHTTEXT }}>Sign in to continue</Text>
                    <View style={{ marginTop: 40 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10}}>
                            <AppInput icon={"person-outline"} placeholder={"Name"} name={'name'} />
                            <AppInput icon={"local-phone"} placeholder={"Phone"} name={'contact'} />
                            <AppInput icon={"mail-outline"} placeholder={"Email"} name={"email"} error={!REGXEMAIL?.test(ApiReducer?.apiJson?.email)} />
                            <PasswordInput icon={"lock-outline"} placeholder={"Password"} name={"password"}/>
                            <PasswordInput icon={"lock-outline"} placeholder={"Confirm Password"} name={"confirmPassword"} />
                            <AppButton text={"Sign in"} onPress={handleClick} />
                            <View style={{ display: "flex", alignItems: 'center', alignSelf: "center", flexDirection: "row" }}>
                                <Text>Already have an account? </Text>
                                <TouchableOpacity onPress={navigatetoSignIn}>
                                    <Text style={{ fontWeight: 'bold', color: Colors.PRIMARY }}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Register;
