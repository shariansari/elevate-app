import React from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constant/Color';
import AppInput from '../components/AppInput/AppInput';
import AppButton from '../components/AppButton/AppButton';
import { useNavigation } from '@react-navigation/native';
import { RegisterValidation } from '../validationScheema/RegisterValidation';
import { useDispatch, useSelector } from 'react-redux';
import { setApiErrorJson, setUserData } from '../redux/Actions/ApiAction';
import { SET_API_JSON_ERROR } from '../redux/ActionName/ActionName';
import { REGXEMAIL } from '../constant/Regex';
import { HitApi } from '../Api/ApiHIt';
import { addUser } from '../constant/Constant';
import { _setUserData } from '../storage/Storage';


function Register() {
    const ApiReducer = useSelector(state => state.ApiReducer);
    const reduxUser = useSelector(state => state.AuthReducer);

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const navigatetoSignIn = () => {
        navigation.navigate("Login");
    };

    const handleClick = () => {
        RegisterValidation(ApiReducer?.apiJson).then((error) => {
            console.log("error", error);
            dispatch(setApiErrorJson(error, SET_API_JSON_ERROR))
            if (Object.keys(error).length === 0) {
                console.log("yess");
                HitApi(ApiReducer?.apiJson, addUser).then((res) => {
                    console.log("res", res);
                    if (res?.statusCode == 201 && res?.message === "Profile created successfully") {
                        _setUserData(res?.data)
                        dispatch(setUserData(res.data))
                        navigation.navigate("Dashboard")
                    }
                    else {
                        Alert.alert(res?.message)
                    }
                })
            }
        })
    }

    console.log("reduxUser", reduxUser);

    return (
        <ScrollView
            style={{ backgroundColor: Colors.LOGINBG, flex: 1 }}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={{ width: '80%' }}>
                <Text style={{ fontSize: 30, color: Colors.BLACK, fontFamily: 'Poppins-Bold', }}>
                    Sign up
                </Text>
                <Text style={{ marginTop: 10, fontSize: 18, color: Colors.LIGHTTEXT, fontFamily: 'Poppins-Regular' }}>
                    Sign in to continue
                </Text>
                <View style={{ marginTop: 40, width: '100%' }}>
                    <AppInput icon={"person-outline"} placeholder={"Name"} name={'name'} error={!ApiReducer.apiJson?.name} />
                    <AppInput icon={"mail-outline"} placeholder={"Email"} name={"email"} error={!REGXEMAIL?.test(ApiReducer?.apiJson?.email)} />
                    <View style={{ marginTop: 30 }}>
                        <AppButton text={"Sign up"} onPress={handleClick} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Regular' }}>Already have an account? </Text>
                        <TouchableOpacity onPress={navigatetoSignIn}>
                            <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Bold' }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    );
}

export default Register;
