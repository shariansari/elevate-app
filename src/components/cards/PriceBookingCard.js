import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Vibration } from 'react-native';
import Colors from '../../constant/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HitApi } from '../../Api/ApiHIt';
import { addCart, deleteCart } from '../../constant/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { setCartFlag } from '../../redux/Actions/CartAction';

function PriceBookingCard({ data }) {
    const [quantity, setQuantity] = useState(0);
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

    const addToCart = async () => {
        try {
            Vibration.vibrate(500);
            dispatch(setCartFlag(false));

            console.log("data",data);
            

            const json = {
                serviceId: data._id,
                userId: reduxUser?.doc?._id,
                
            };

            console.log('Adding to cart:', json);

            const res = await HitApi(json, addCart);
            if (res?.message === "Service added to Cart successfully") {
                dispatch(setCartFlag(true));
                setQuantity(prev => prev + 1);
                setTimeout(() => dispatch(setCartFlag(false)), 3000);
            } else {
                // Handle failed response
                console.warn("Failed to add to cart:", res?.message);
            }
        } catch (err) {
            console.error("Error adding to cart:", err);
        }
    };

    const removeFromCart = async () => { 
        try {
            Vibration.vibrate(500);

            if (!data?._id) {
                console.error("Cannot remove item: Missing _id");
                return;
            }

            const json = { 
                serviceId: data._id ,
                userId: reduxUser?.doc?._id,
            };
            console.log("Removing from cart:", json);
            const res = await HitApi(json, deleteCart);

            if (res?.message === "Cart service deleted successfully") {
                if (quantity <= 1) {
                    setQuantity(0);
                    dispatch(setCartFlag(false));
                } else {
                    setQuantity(prev => prev - 1);
                }
            } else {
                console.warn("Failed to remove from cart:", res?.message);
            }
        } catch (err) {
            console.error("Error removing from cart:", err);
        }
    };

    const handleAdd = () => {
        addToCart();
    };

    const increaseQuantity = () => {
        addToCart();
    };

    const decreaseQuantity = () => {
        removeFromCart();
    };


    console.log("data",data);
    

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 }}>
            <Image
                source={{ uri: data.image || 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80' }}
                style={{ height: 80, width: 80, borderRadius: 20 }}
            />
            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>{data.service}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', color: Colors.PRIMARY }}>{`Price: ₹${data.price}`}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        {renderStars(data.rating)}
                    </View>

                    {quantity === 0 ? (
                        <TouchableOpacity 
                            onPress={handleAdd}
                            style={{ backgroundColor: Colors.SECONDARY, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 10 }}
                        >
                            <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-SemiBold' }}>Add</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={{ 
                            backgroundColor: Colors.SECONDARY, 
                            flexDirection: 'row', 
                            alignItems: 'center',
                            paddingVertical: 5, 
                            borderRadius: 10 
                        }}>
                            <TouchableOpacity 
                                onPress={decreaseQuantity}
                                style={{ 
                                    paddingHorizontal: 15,
                                    height: 24,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-Bold', fontSize: 16 }}>-</Text>
                            </TouchableOpacity>
                            
                            <Text style={{ 
                                color: Colors.WHITE, 
                                fontFamily: 'Poppins-SemiBold',
                                minWidth: 20,
                                textAlign: 'center' 
                            }}>
                                {quantity}
                            </Text>
                            
                            <TouchableOpacity 
                                onPress={increaseQuantity}
                                style={{ 
                                    paddingHorizontal: 15,
                                    height: 24,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ color: Colors.WHITE, fontFamily: 'Poppins-Bold', fontSize: 16 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

export default PriceBookingCard;