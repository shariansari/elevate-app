import React, { useState } from 'react';
import { TextInput, View, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constant/Color';
import { useDispatch, useSelector } from 'react-redux';
import { setApiJson } from '../../redux/Actions/ApiAction';


function PasswordInput({ icon, placeholder,name,error }) {
    const [show, setShow] = useState(false);

    const ApiReducer = useSelector(state => state.ApiReducer);
    const dispatch = useDispatch();

    const onChange = (value) => {
        const updatedJson = { ...ApiReducer?.apiJson, [name]: value };
        dispatch(setApiJson(updatedJson)); 
    };
    console.log("ApiReducer+++", ApiReducer);

    return (
    <View>
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.INPUTBG,
                padding: 15,
                borderRadius: 15,
                gap: Platform.OS === 'ios' ? 12 : 5,
            }}
        >
            <Icon name={icon} size={20} color={Colors.BLACK} />
            <TextInput
                onChangeText={onChange}
                value={ApiReducer?.apiJson[name] || ''} 
                placeholder={placeholder}
                placeholderTextColor={Colors.LIGHTTEXT}
                secureTextEntry={!show} // Toggle visibility
                style={{
                    color: Colors.BLACK,
                    flex: 1,
                    paddingVertical: Platform.OS === 'ios' ? 6 : 5,
                    fontSize: Platform.OS === 'ios' ? 18 : 16,
                }}
            />
            <TouchableOpacity onPress={() => setShow((prev) => !prev)}>
                <Icon name={show ? 'visibility' : 'visibility-off'} size={20} color={Colors.BLACK} />
            </TouchableOpacity>
        </View>
        <View style={{height:20}}>
        {
            error && <Text style={{color:Colors.ERROR,fontSize:12 ,marginTop:5}}>Hello Akshara</Text>
        }
    </View>
    </View>
    );
}

export default PasswordInput;
