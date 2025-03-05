import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Colors from '../constant/Color'

function VerifyScreen() {
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
        Please enter the 4 digit security code we just sent you at 713-444-xxxx
        </Text>
        {/* <View style={{ marginTop: 50, width: '100%' }}>
            <PhoneInput name={'contact'} error={ApiReducer?.apiJson?.contact?.length !== 10 && ApiReducer?.apiJson?.contact?.length > 0} />
        </View>
        <View style={{ marginTop: 40 }}>
            <AppButton text={'Continue'} onPress={handleClick} />
        </View> */}
    </View>
</ScrollView>
  )
}

export default VerifyScreen
