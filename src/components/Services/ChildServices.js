import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constant/Color';
import { useNavigation } from '@react-navigation/native';
import { HitApi } from '../../Api/ApiHIt';
import { domainId, localService } from '../../constant/Constant';
import { setChildServiceData } from '../../redux/Actions/ServiceAction';

function ChildServices() {
    const ServiceReducer = useSelector(state => state.ServiceReducer);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getChildServices();
    }, []);

    const handleBack = () => {
        navigation.goBack();
    };

    const getChildServices = () => {
        setLoading(true);
        let json = {
            domainId: domainId,
            serviceName: ServiceReducer?.selectedService
        };
        
        HitApi(json, localService)
            .then((res) => {
                if (res?.status === "success") {
                    dispatch(setChildServiceData(res?.service?.Child));
                } else {
                    setError("Failed to fetch child services");
                }
                console.log("Child services response:", res);
            })
            .catch((err) => {
                console.error("Error fetching child services:", err);
                setError("Error fetching child services");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <View style={{ padding: 20, backgroundColor: 'white', flex: 1 }}>
            <View style={{ flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBack}>
                        <Ionicons name="arrow-back-outline" size={22} color={Colors.BLACK} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18 }}>{ServiceReducer?.selectedService}</Text>
                    </View>
                    <View style={{ width: 22 }} />
                </View>
            </View>
            
            <View style={{ marginTop: 30 }}>
                {loading ? (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Loading services...</Text>
                ) : error ? (
                    <Text style={{ textAlign: 'center', marginTop: 20, color: 'red' }}>{error}</Text>
                ) : ServiceReducer?.childServices?.length > 0 ? (
                    ServiceReducer.childServices.map((service, index) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 }} key={index}>
                            <Image
                                source={{ uri: service?.image || 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80' }}
                                style={{ height: 80, width: 80, borderRadius: 20 }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>{service?.name}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.PRIMARY }}>{`Price: ${service?.price}`}</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                        <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.BLACK }}>{`Time: ${service?.time}`}</Text>
                                    </View>

                                    <TouchableOpacity 
                                        style={{ backgroundColor: Colors.SECONDARY, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8 }}
                                        onPress={() => {
                                            // Add book functionality
                                            navigation.navigate('BookingScreen', { service });
                                        }}
                                    >
                                        <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-Regular' }}>Book</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>No services available</Text>
                )}
            </View>
        </View>
    );
}

export default ChildServices;