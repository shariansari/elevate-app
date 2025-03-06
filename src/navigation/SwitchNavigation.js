import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch,useSelector } from 'react-redux';
import MainNavigation from './MainNavigation';
import LoginNavigation from './LoginNavigation';
import { setUserData } from '../redux/Actions/ApiAction';
import { _getUserData } from '../storage/Storage';


function SwitchNavigation() {
    const dispatch = useDispatch()

    const reduxUser = useSelector(state => state.AuthReducer)

    console.log("reduxUser",reduxUser);

    useEffect(() => {

        if (reduxUser.doc === null) {
    
          _getUserData().then((doc) => {

            console.log("doc",doc);
            
            if (doc !== undefined) {
              dispatch(setUserData(doc))
            }
          })
        }
       
     
      }, [reduxUser])
    

  return (
    <>
    {reduxUser.doc !== !null ? <MainNavigation /> : <LoginNavigation /> }
</>
  )
}

export default SwitchNavigation
