import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch,useSelector } from 'react-redux';
import MainNavigation from './MainNavigation';
import LoginNavigation from './LoginNavigation';


function SwitchNavigation() {
    const dispatch = useDispatch()

    const reduxUser = useSelector(state => state.AuthReducer)

    console.log("reduxUser",reduxUser);
    

  return (
    <>
    {reduxUser.doc !== null ? <MainNavigation /> : <LoginNavigation /> }
</>
  )
}

export default SwitchNavigation
