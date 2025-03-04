import React, { useRef, useEffect } from 'react';
import { Image, TextInput, View } from 'react-native';
import Colors from '../../constant/Color';

function PhoneInput() {
    const inputRef = useRef(null); // Create a ref for TextInput

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Automatically focus input on mount
        }
    }, []);

    return (
        <View>
            <View style={{ backgroundColor: Colors.SKIN, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <View style={{ borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderBottomWidth: 0, borderLeftWidth: 0, paddingRight: 20 }}>
                        <Image source={require('../../AppImages/flag.png')} style={{ height: 50, width: 50 }} />
                    </View>
                    <TextInput
                        ref={inputRef} // Attach the ref to TextInput
                        placeholder='Enter Phone no'
                        placeholderTextColor={'red'}
                        style={{ color: 'black', fontSize: 18 }}
                        keyboardType="phone-pad" // Ensures numeric keyboard for phone number
                        autoFocus // Ensures it opens automatically
                    />
                </View>
            </View>
        </View>
    );
}

export default PhoneInput;
