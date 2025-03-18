import React from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../constant/Color'
import Icon from 'react-native-vector-icons/MaterialIcons';


function AppButton({ text, onPress, icon, bg, color }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: bg ? bg : Colors.PRIMARY, alignItems: 'center', paddingVertical: 15, borderRadius: 15, borderColor: Colors.PRIMARY, borderWidth: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Text style={{ fontSize: 16, color: color ? color : "white", fontFamily: 'Poppins-SemiBold' }}>{text}</Text>
          {icon && <Icon name={icon} size={25} color={"white"} />}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default AppButton