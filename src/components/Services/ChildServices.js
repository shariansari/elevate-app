import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constant/Color';
import { useNavigation } from '@react-navigation/native';
import { HitApi } from '../../Api/ApiHIt';
import { addCart, domainId, localService } from '../../constant/Constant';
import { setChildServiceData } from '../../redux/Actions/ServiceAction';
import { setCartFlag } from '../../redux/Actions/CartAction';
import Screens from '../../constant/Screens';

function ChildServices() {
    const ServiceReducer = useSelector(state => state.ServiceReducer);
    const reduxUser = useSelector(state => state.AuthReducer);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isVisible ,setIsVisible] = useState(false) 

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantityMap, setQuantityMap] = useState({}); 

    useEffect(() => {
        getChildServices();
    }, []);

    const handleBack = () => {
        navigation.goBack();
    };

    const getChildServices = async () => {
        setLoading(true);
        let json = {
            domainId: domainId,
            serviceName: ServiceReducer?.selectedService
        };

        try {
            const res = await HitApi(json, localService);
            if (res?.status === "success") {
                dispatch(setChildServiceData(res?.service?.Child || []));
            } else {
                setError("Failed to fetch child services");
            }
        } catch (err) {
            console.error("Error fetching child services:", err);
            setError("Error fetching child services");
        } finally {
            setLoading(false);
        }
    };

    const handlePress = (service) => {
        if (!service) return; // Prevent undefined error

        setQuantityMap(prev => ({ ...prev, [service.name]: 1 }));
        addToCart(1, service);
    };

    const addToCart = (qty, service) => {
        if (!service) return; // Prevent undefined error

        console.log("Adding to cart:", service);
        Vibration.vibrate(500);
        dispatch(setCartFlag(false));

        const json = {
            serviceName: service.name,
            price: service.price,
            userId: reduxUser?.doc?._id,
            quantity: qty
        };

        HitApi(json, addCart)
            .then((res) => {
                console.log("Cart response:", res);
                if (res?.message === "Service added to Cart successfully") {
                    setIsVisible(true)
                    setTimeout(() =>  setIsVisible(false), 3000);
                }
            })
            .catch(err => console.error("Error adding to cart:", err));
    };

    const updateQuantity = (service, newQuantity) => {
        if (!service) return; 

        if (newQuantity > 0) {
            setQuantityMap(prev => ({ ...prev, [service.name]: newQuantity }));
            addToCart(newQuantity, service);
        } else {
            setQuantityMap(prev => {
                const updated = { ...prev };
                delete updated[service.name];
                return updated;
            });
        }
    };

    const navigateToCart = () => {
        navigation.navigate(Screens.CART);
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
                    <TouchableOpacity onPress={navigateToCart}>
                        <Ionicons name={'cart-outline'} size={30} color={Colors.SECONDARY} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 30 }}>
                {loading ? (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Loading services...</Text>
                ) : error ? (
                    <Text style={{ textAlign: 'center', marginTop: 20, color: 'red' }}>{error}</Text>
                ) : Array.isArray(ServiceReducer?.childServices) && ServiceReducer.childServices.length > 0 ? (
                    ServiceReducer.childServices.map((service, index) => {
                        const quantity = quantityMap[service?.name] || 0;
                        return (
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 }} key={index}>
                                <Image
                                    source={{ uri: service?.image || 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=2036&q=80' }}
                                    style={{ height: 80, width: 80, borderRadius: 20 }}
                                />
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>{service?.name || "Unknown"}</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.PRIMARY }}>{`Price: ${service?.price || "N/A"}`}</Text>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                                        <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.BLACK }}>{`Time: ${service?.time || "N/A"}`}</Text>

                                        {quantity === 0 ? (
                                            <TouchableOpacity style={{ backgroundColor: Colors.SECONDARY, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8 }} onPress={() => handlePress(service)} >
                                                <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold' }}>Add</Text>
                                            </TouchableOpacity>
                                        ) : (
                                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.SECONDARY, borderRadius: 8, overflow: 'hidden', paddingVertical: 5, paddingHorizontal: 5 }}>
                                                <TouchableOpacity style={{ paddingHorizontal: 7 }} onPress={() => updateQuantity(service, quantity - 1)}>
                                                    <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>-</Text>
                                                </TouchableOpacity>
                                                <View style={{ paddingHorizontal: 7 }}>
                                                    <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold' }}>{quantity}</Text>
                                                </View>
                                                <TouchableOpacity style={{ paddingHorizontal: 7 }} onPress={() => updateQuantity(service, quantity + 1)}>
                                                    <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </View>
                        );
                    })
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>No services available</Text>
                )}
            </View>

            {isVisible && (
                <View style={styles.bottomBanner}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-Regular', fontSize: 12 }}>Service Added to cart</Text>
                        <TouchableOpacity onPress={navigateToCart}>
                            <Text style={{ color: Colors.PRIMARY, fontFamily: 'Poppins-Bold', fontSize: 13, }}>View Cart</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            )}
        </View>
    );
}

export default ChildServices;




const styles = StyleSheet.create({
    bottomBanner: {
      backgroundColor: Colors.SECONDARY,
      margin: 10,
      padding: 12,
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      zIndex: 10,
      borderRadius: 10
    },
    bannerText: {
      color: 'white',
      fontSize: 16,
    },
    hideText: {
      color: 'red',
      marginTop: 5,
    },
  });