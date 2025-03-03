import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constant/Color';
import AppInput from '../components/AppInput/AppInput';
import AppButton from '../components/AppButton/AppButton';
import PasswordInput from '../components/AppInput/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import { REGXEMAIL } from '../constant/Regex';
import { useDispatch, useSelector } from 'react-redux';
import { LoginValidation } from '../validationScheema/LoginValidation';
import { setApiErrorJson, setUserData } from '../redux/Actions/ApiAction';
import { SET_API_JSON_ERROR } from '../redux/ActionName/ActionName';
import { addUser, login } from '../constant/Constant';
import { HitApi } from '../Api/ApiHIt';
import { _setUserData } from '../storage/Storage';

function Login() {
    const ApiReducer = useSelector(state => state.ApiReducer);
    const navigation = useNavigation();
    const dispatch = useDispatch()
    
    const navigatetoSignup = () => {
        navigation.navigate("Register");
    };

    const handleClick = () =>{
        LoginValidation(ApiReducer?.apiJson).then((error) => {
                    console.log("error", error);
                    dispatch(setApiErrorJson(error, SET_API_JSON_ERROR))
                    if(Object.keys(error).length === 0){
                        console.log("yess");
                        
                        HitApi(ApiReducer?.apiJson,login).then((res)=>{
                            console.log("res",res);
                            console.log("res?.statusCode === 200 && res?.message === ",res?.statusCode === 200 && res?.message === "User login successfully");
                            
                            if(res?.statusCode === 200 && res?.message === "User login successfully"){
                              console.log("in")
                                _setUserData(res.doc)
                                dispatch(setUserData(res.doc))
                            }  
                        })
                    }
                })
    }

    return (
        <ScrollView style={{ backgroundColor: Colors.LOGINBG }}>
            <View style={{ paddingTop: 180, paddingHorizontal: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.BLACK }}>Welcome!</Text>
                <View>
                    <Text style={{ marginTop: 10, fontSize: 18, color: Colors.LIGHTTEXT }}>Sign in to continue</Text>
                    <View style={{ marginTop: 40 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
                            <AppInput icon={"mail-outline"} placeholder={"Email"} name={"email"} error={!REGXEMAIL?.test(ApiReducer?.apiJson?.email)}  />
                            <PasswordInput icon={"lock-outline"} placeholder={"Password"} name={"password"} error={!ApiReducer.apiJson?.password} />
                            <AppButton text={"Sign in"} onPress={handleClick} />
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
