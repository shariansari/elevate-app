import React, { useEffect, useState } from 'react';
import {  View } from 'react-native';import { HitApi } from '../../Api/ApiHIt';
import { searchBestService } from '../../constant/Constant';
import PriceBookingCard from '../cards/PriceBookingCard';
import { useSelector } from 'react-redux';


function BestServices() {
   
    
    const [data, setData] = useState()
    useEffect(() => {
        getBestServices()
    }, [])
    const getBestServices = () => {
        const json = {
            page: 1,
            limit: 10,
            search: {}
        }
        HitApi(json, searchBestService).then((res) => {
            console.log("res", res);
            if (res?.message === "Best services retrieved successfully") {
                setData(res.data)
            }
        })
    }
    return (
        <View style={{ marginTop: 15, flexDirection: 'column', gap: 20 }}>
            {data?.map((service, index) => (
               <View key={index}>
                 <PriceBookingCard data={service}  />
                 </View>
            ))}
        </View>
    );
}

export default BestServices;
