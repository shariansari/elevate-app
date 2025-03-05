import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from '../constant/Color';
import PhoneInput from '../components/AppInput/PhoneInput';
import AppButton from '../components/AppButton/AppButton';
import { LoginValidation } from '../validationScheema/LoginValidation';
import { useDispatch, useSelector } from 'react-redux';
import { setApiErrorJson } from '../redux/Actions/ApiAction';
import { SET_API_JSON_ERROR } from '../redux/ActionName/ActionName';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const ApiReducer = useSelector(state => state.ApiReducer);
    const dispatch = useDispatch()
    const navigation = useNavigation();

    const handleClick = () => {
        LoginValidation(ApiReducer?.apiJson).then((error) => {

            console.log('error', error);

            dispatch(setApiErrorJson(error, SET_API_JSON_ERROR))
            if (Object.keys(error).length === 0) {
                console.log("Hit Api Here");
                navigation.navigate("verify");

            }
        })
    }
    return (
        <ScrollView
            style={{ backgroundColor: Colors.LOGINBG, flex: 1 }}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}
        >
            <View style={{ width: '80%', paddingTop: Platform.OS === 'ios' ? 0 : 50 }}>
                <Text style={{ fontSize: 30, color: Colors.BLACK, fontFamily: 'Poppins-Bold' }}>
                    Your phone!
                </Text>

                <Text style={{ marginTop: 10, color: Colors.LIGHTTEXT, fontFamily: 'Poppins-Regular' }}>
                    A 4-digit security code will be sent via SMS to verify your mobile number!
                </Text>
                <View style={{ marginTop: 50, width: '100%' }}>
                    <PhoneInput name={'contact'} error={ApiReducer?.apiJson?.contact?.length !== 10 && ApiReducer?.apiJson?.contact?.length > 0} />
                </View>
                <View style={{ marginTop: 40 }}>
                    <AppButton text={'Continue'} onPress={handleClick} />
                </View>
            </View>
        </ScrollView>
    );
}

export default Login;
