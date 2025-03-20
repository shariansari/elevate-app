import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setUserData } from '../../redux/Actions/ApiAction';
import { _removeUserData } from '../../storage/Storage';

function Profile() {
  const dispatch = useDispatch()
      const navigation = useNavigation();
  

  const handleOnPress = () => {
    Alert.alert('Logging Off', 'Are you sure want to log out', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => out()},
    ]);

    function out () {
      _removeUserData()
      navigation.navigate('Login');
      dispatch(setUserData(null))

    }
  

  }
  return (
    <View style={{backgroundColor:"red",flex:1,alignItems:'center',justifyContent:'center'}}>
     <TouchableOpacity onPress={handleOnPress} style={{backgroundColor:"white",paddingHorizontal:20,paddingVertical:10,borderRadius:10}}>
     <Text>Log out</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Profile
