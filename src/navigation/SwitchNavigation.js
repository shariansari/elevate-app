import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MainNavigation from './MainNavigation';
import LoginNavigation from './LoginNavigation';
import { setUserData } from '../redux/Actions/ApiAction';
import { _getUserData } from '../storage/Storage';

function SwitchNavigation() {
    const dispatch = useDispatch();
    const reduxUser = useSelector(state => state.AuthReducer);

    console.log("reduxUser++++",reduxUser);
    

    useEffect(() => { 
        if (reduxUser?.doc === null) {
            _getUserData().then((doc) => {
                console.log("Fetched user from storage:", doc);  
                if (doc) {
                    dispatch(setUserData(doc));
                }
            }).catch(error => {
                console.error("Error fetching user data:", error);
            });
        }
    }, [reduxUser?.doc, dispatch]);

    return (
        <>
            {reduxUser?.doc ? <MainNavigation /> : <MainNavigation />}
            {/* {reduxUser?.doc ? <MainNavigation /> : <MainNavigation />} */}

        </>
    );
}

export default SwitchNavigation;
