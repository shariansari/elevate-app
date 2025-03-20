import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, Vibration } from 'react-native';
import Colors from '../../constant/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HitApi } from '../../Api/ApiHIt';
import { addCart } from '../../constant/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { setCartFlag } from '../../redux/Actions/CartAction';

function PriceBookingCard({ data }) {
    const [quantity, setQuantity] = useState(0);
    const [showQuantityControls, setShowQuantityControls] = useState(false);
    const reduxUser = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Ionicons
                key={index}
                name={"star"}
                size={14}
                color={index < rating ? Colors.YELLOW : Colors.LIGHTTEXT}
            />
        ));
    };

    const handlePress = () => {
        if (!showQuantityControls) {
            setQuantity(1);
            setShowQuantityControls(true);
            addToCart(1);
        }
    };

    const addToCart = (qty) => {
        Vibration.vibrate(500);
        dispatch(setCartFlag(false));

        var json = {
            serviceName: data.service,
            price: data.price,
            userId: reduxUser?.doc?._id,
            quantity: qty
        };
        console.log('json', json);

        HitApi(json, addCart).then((res) => {
            console.log("res", res);

            if (res?.message === "Service added to Cart successfully") {
                dispatch(setCartFlag(true));
                setTimeout(() => {
                    dispatch(setCartFlag(false));
                }, 3000);
            }
        }).catch(err => {
            console.error("Error adding to cart:", err);
        });
    };

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        addToCart(newQuantity);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            addToCart(newQuantity);
        } else {
            setQuantity(0);
            setShowQuantityControls(false);

        }
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <Image
                source={{ uri: data.image || 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80' }}
                style={{ height: 80, width: 80, borderRadius: 20 }}
            />
            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>{data.service}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.PRIMARY }}>{`Price: ${data.price}`}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        {renderStars(data.rating)}
                    </View>

                    {!showQuantityControls ? (
                        <TouchableOpacity style={{ backgroundColor: Colors.SECONDARY, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8 }} onPress={handlePress} >
                            <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold' }}>Add</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.SECONDARY, borderRadius: 8, overflow: 'hidden',paddingVertical:5,paddingHorizontal:5 }}>
                            <TouchableOpacity style={{paddingHorizontal: 7, alignItems: 'center', justifyContent: 'center'}} onPress={decreaseQuantity}>
                                <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>-</Text>
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: 7, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold' }}>{quantity}</Text>
                            </View>
                            <TouchableOpacity style={{paddingHorizontal: 7, alignItems: 'center', justifyContent: 'center'}} onPress={increaseQuantity}>
                                <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

export default PriceBookingCard;