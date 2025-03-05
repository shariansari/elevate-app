import React, { useRef, useEffect } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import Colors from '../../constant/Color';
import { useDispatch, useSelector } from 'react-redux';
import { setApiJson } from '../../redux/Actions/ApiAction';
import Icon from 'react-native-vector-icons/MaterialIcons';


function PhoneInput({name,error}) {

    
    const ApiReducer = useSelector(state => state.ApiReducer);
    const inputRef = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);


    const onChange = (value) => {
        const updatedJson = {
            ...ApiReducer?.apiJson,
            [name]: value
        };
        dispatch(setApiJson(updatedJson));
    };

    console.log("ApiReducer",ApiReducer);
    

    return (
        <View >
            <View style={{ backgroundColor: Colors.SKIN, paddingVertical: Platform.OS === 'ios' ? 15 : 10, paddingHorizontal: 15, borderRadius: 20, borderColor: Colors.ERROR,borderWidth:error ? 1:0}}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <View style={{ borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, paddingRight: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image source={require('../../AppImages/flag.png')} style={{ height: 30, width: 50 }} />
                            <Text style={{ fontSize: 15 }}>+91</Text>
                        </View>
                    </View>
                    <TextInput
                        onChangeText={onChange}
                        ref={inputRef}
                        placeholder='Enter Phone no'
                        placeholderTextColor={Colors.LIGHTTEXT}
                        style={{ color: 'black', fontFamily: 'Poppins-Regular' }}
                        keyboardType="phone-pad"
                        autoFocus
                        maxLength={10}
                    />
                 { ApiReducer?.apiJson?.contact?.length  > 0 &&
                      <View>
                      {error ? <Icon name={'close'} size={20} color={Colors.ERROR} /> : <Icon name={'check-circle'} size={20} color={Colors.GREEN} />}
                      </View>
                 }
                </View>
            </View>
        </View>
    );
}

export default PhoneInput;

