import React from 'react';
import { TextInput, View, Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constant/Color';
import { useDispatch, useSelector } from 'react-redux';
import { setApiJson } from '../../redux/Actions/ApiAction';

function AppInput({ icon, placeholder, name,error }) {

    console.log('error',error);
    
    const ApiReducer = useSelector(state => state.ApiReducer);
    const dispatch = useDispatch();

    const onChange = (value) => {
        const formattedValue = name === "email" ? value.toLowerCase() : value;
        const updatedJson = { ...ApiReducer?.apiJson, [name]: formattedValue };
        dispatch(setApiJson(updatedJson));
    };

    console.log("ApiReducer", ApiReducer);

    return (
       <View>
         <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.INPUTBG,
                padding: 15,
                borderRadius: 15,
                gap: Platform.OS === 'ios' ? 12 : 5
            }}
        >
            <Icon name={icon} size={20} color={Colors.BLACK} />
            <TextInput
                onChangeText={onChange}
                value={ApiReducer?.apiJson[name] || ''}
                placeholder={placeholder}
                placeholderTextColor={Colors.LIGHTTEXT}
                autoCapitalize={name === "email" ? "none" : "sentences"}
                style={{
                    color: Colors.BLACK,
                    flex: 1,
                    paddingVertical: Platform.OS === 'ios' ? 6 : 5,
                    fontSize: Platform.OS === 'ios' ? 18 : 14,
                    fontFamily: 'Poppins-Regular',
                    
                }}
            />
        </View>
        <View style={{height:20}}>
            {
                error && <Text style={{color:Colors.ERROR,fontSize:12 ,marginTop:5,fontFamily: 'Poppins-Regular'}}>{ ApiReducer?.apiJsonError?.[name]}</Text>
            }
        </View>
       </View>
    );
}

export default AppInput;
